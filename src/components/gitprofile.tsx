import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { formatDistance } from 'date-fns';
import {
  CustomError,
  GENERIC_ERROR,
  INVALID_CONFIG_ERROR,
  INVALID_GITHUB_USERNAME_ERROR,
  setTooManyRequestError,
} from '../constants/errors';
import { HelmetProvider } from 'react-helmet-async';
import '../assets/index.css';
import { getInitialTheme, getSanitizedConfig, setupHotjar } from '../utils';
import { SanitizedConfig } from '../interfaces/sanitized-config';
import ErrorPage from './error-page';
import HeadTagEditor from './head-tag-editor';
import { DEFAULT_THEMES } from '../constants/default-themes';
import ThemeChanger from './theme-changer';
import { BG_COLOR } from '../constants';
import AvatarCard from './avatar-card';
import { Profile } from '../interfaces/profile';
import DetailsCard from './details-card';
import SkillCard from './skill-card';
import ExperienceCard from './experience-card';
import EducationCard from './education-card';
import CertificationCard from './certification-card';
import { GithubProject } from '../interfaces/github-project';
import GithubProjectCard from './github-project-card';
import ExternalProjectCard from './external-project-card';
import BlogCard from './blog-card';
import Footer from './footer';
import PublicationCard from './publication-card';

const FALLBACK_PROFILE: Profile = {
  avatar: 'https://avatars.githubusercontent.com/u/16514237?v=4',
  name: 'Shawon Barua',
  bio: 'Results-driven QA Engineer with 12+ years of experience ensuring top-tier product quality across diverse web, mobile, and AI projects. Proven expertise in test automation, strategic planning, and process optimization.',
  location: 'Dhaka, Bangladesh',
  company: '',
};

const FALLBACK_GITHUB_PROJECTS: GithubProject[] = [
  {
    name: 'API-RestAssured-TestNG-Automation',
    html_url:
      'https://github.com/shawon-barua/API-RestAssured-TestNG-Automation',
    description:
      'Repository to showcase API automation by RestAssured, TESTNG, JAVA',
    stargazers_count: '0',
    forks_count: '0',
    language: 'Java',
  },
  {
    name: 'test_cases',
    html_url: 'https://github.com/shawon-barua/test_cases',
    description:
      'Comprehensive QA test cases written as automated and manual testing examples',
    stargazers_count: '0',
    forks_count: '0',
    language: 'Markdown',
  },
  {
    name: 'cypress-pom',
    html_url: 'https://github.com/shawon-barua/cypress-pom',
    description:
      'Automation test suite written with Cypress, following Page Object Model architecture',
    stargazers_count: '0',
    forks_count: '0',
    language: 'JavaScript',
  },
  {
    name: 'Android_iOS-App-Automation',
    html_url: 'https://github.com/shawon-barua/Android_iOS-App-Automation',
    description:
      'Cross-platform mobile test automation framework with Appium and Java',
    stargazers_count: '0',
    forks_count: '0',
    language: 'Java',
  },
  {
    name: 'Playwright-Pom',
    html_url: 'https://github.com/shawon-barua/Playwright-Pom',
    description:
      'Scalable automation framework built with Microsoft Playwright and TypeScript/JavaScript (POM)',
    stargazers_count: '1',
    forks_count: '0',
    language: 'JavaScript',
  },
  {
    name: 'Toyota_used_car_analysis',
    html_url: 'https://github.com/shawon-barua/Toyota_used_car_analysis',
    description:
      'Exploratory data analysis, price modeling, and visualization on Toyota used car dataset',
    stargazers_count: '0',
    forks_count: '0',
    language: 'Jupyter Notebook',
  },
  {
    name: 'cucumber-jvm-selenium-example-master',
    html_url:
      'https://github.com/shawon-barua/cucumber-jvm-selenium-example-master',
    description:
      'Behavior-Driven Development (BDD) testing framework with Cucumber JVM and Selenium WebDriver',
    stargazers_count: '0',
    forks_count: '0',
    language: 'Java',
  },
  {
    name: 'Selenium-java-POM-TestNG',
    html_url: 'https://github.com/shawon-barua/Selenium-java-POM-TestNG',
    description:
      'Web automation test framework by Selenium, Java, and TestNG following Page Object Model',
    stargazers_count: '0',
    forks_count: '0',
    language: 'Java',
  },
];

/**
 * Renders the GitProfile component.
 *
 * @param {Object} config - the configuration object
 * @return {JSX.Element} the rendered GitProfile component
 */
const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config),
  );
  const [theme, setTheme] = useState<string>(DEFAULT_THEMES[0]);
  const [error, setError] = useState<CustomError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(() => {
    try {
      const cached = localStorage.getItem(
        `gitprofile_profile_${config?.github?.username}`,
      );
      if (cached) return JSON.parse(cached);
    } catch {}
    return config?.github?.username === 'shawon-barua'
      ? FALLBACK_PROFILE
      : null;
  });
  const [githubProjects, setGithubProjects] = useState<GithubProject[]>(() => {
    try {
      const modeKey = config?.projects?.github?.mode || 'automatic';
      const cached = localStorage.getItem(
        `gitprofile_repos_${config?.github?.username}_${modeKey}`,
      );
      if (cached) return JSON.parse(cached);
    } catch {}
    return config?.github?.username === 'shawon-barua'
      ? FALLBACK_GITHUB_PROJECTS
      : [];
  });

  const getGithubProjects = useCallback(
    async (publicRepoCount: number): Promise<GithubProject[]> => {
      if (sanitizedConfig.projects.github.mode === 'automatic') {
        if (publicRepoCount === 0) {
          return [];
        }

        // Try standard user repos endpoint first (higher rate limit)
        try {
          const repoResponse = await axios.get(
            `https://api.github.com/users/${sanitizedConfig.github.username}/repos?sort=${sanitizedConfig.projects.github.automatic.sortBy}&per_page=30`,
            {
              headers: { 'Content-Type': 'application/vnd.github.v3+json' },
            },
          );
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let items = repoResponse.data;
          if (Array.isArray(items) && items.length > 0) {
            if (sanitizedConfig.projects.github.automatic.exclude.forks) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              items = items.filter((repo: any) => !repo.fork);
            }
            if (
              sanitizedConfig.projects.github.automatic.exclude.projects.length
            ) {
              const excluded =
                sanitizedConfig.projects.github.automatic.exclude.projects.map(
                  (p) => p.toLowerCase(),
                );
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              items = items.filter(
                (repo: any) =>
                  !excluded.includes(repo.name?.toLowerCase()) &&
                  !excluded.includes(repo.full_name?.toLowerCase()),
              );
            }
            return items
              .slice(0, sanitizedConfig.projects.github.automatic.limit)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map((repo: any) => ({
                name: repo.name,
                html_url: repo.html_url,
                description: repo.description,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
                language: repo.language,
              }));
          }
        } catch {
          // Fall back to search API if user repos failed
        }

        const excludeRepo =
          sanitizedConfig.projects.github.automatic.exclude.projects
            .map((project) => `+-repo:${project}`)
            .join('');

        const query = `user:${sanitizedConfig.github.username}+fork:${!sanitizedConfig.projects.github.automatic.exclude.forks}${excludeRepo}`;
        const url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.projects.github.automatic.sortBy}&per_page=${sanitizedConfig.projects.github.automatic.limit}&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { 'Content-Type': 'application/vnd.github.v3+json' },
        });
        const repoData = repoResponse.data;

        return repoData.items;
      } else {
        const manualProjects = sanitizedConfig.projects.github.manual.projects;
        if (manualProjects.length === 0) {
          return [];
        }

        try {
          const repoResponse = await axios.get(
            `https://api.github.com/users/${sanitizedConfig.github.username}/repos?per_page=100`,
            {
              headers: { 'Content-Type': 'application/vnd.github.v3+json' },
            },
          );
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const allUserRepos: any[] = repoResponse.data;
          if (Array.isArray(allUserRepos)) {
            const mapped: GithubProject[] = manualProjects
              .map((proj) => {
                const cleanName = proj.includes('/')
                  ? proj.split('/')[1]
                  : proj;
                const found = allUserRepos.find(
                  (r) =>
                    r.name?.toLowerCase() === cleanName.toLowerCase() ||
                    r.full_name?.toLowerCase() === proj.toLowerCase(),
                );
                if (found) {
                  return {
                    name: found.name,
                    html_url: found.html_url,
                    description: found.description || '',
                    stargazers_count: String(found.stargazers_count ?? 0),
                    forks_count: String(found.forks_count ?? 0),
                    language: found.language || 'Code',
                  };
                }
                const fallback = FALLBACK_GITHUB_PROJECTS.find(
                  (f) => f.name.toLowerCase() === cleanName.toLowerCase(),
                );
                if (fallback) return fallback;
                return {
                  name: cleanName,
                  html_url: `https://github.com/${sanitizedConfig.github.username}/${cleanName}`,
                  description: '',
                  stargazers_count: '0',
                  forks_count: '0',
                  language: 'Code',
                };
              })
              .filter(Boolean);

            if (mapped.length > 0) return mapped;
          }
        } catch {
          // If GitHub API fails or rate limits, use FALLBACK_GITHUB_PROJECTS
        }

        return FALLBACK_GITHUB_PROJECTS;
      }
    },
    [
      sanitizedConfig.github.username,
      sanitizedConfig.projects.github.mode,
      sanitizedConfig.projects.github.manual.projects,
      sanitizedConfig.projects.github.automatic.sortBy,
      sanitizedConfig.projects.github.automatic.limit,
      sanitizedConfig.projects.github.automatic.exclude.forks,
      sanitizedConfig.projects.github.automatic.exclude.projects,
    ],
  );

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${sanitizedConfig.github.username}`,
      );
      const data = response.data;

      const newProfile: Profile = {
        avatar: data.avatar_url,
        name: data.name || 'Shawon Barua',
        bio: data.bio || '',
        location: data.location || '',
        company: data.company || '',
      };

      setProfile(newProfile);
      try {
        localStorage.setItem(
          `gitprofile_profile_${sanitizedConfig.github.username}`,
          JSON.stringify(newProfile),
        );
      } catch {}

      if (!sanitizedConfig.projects.github.display) {
        return;
      }

      const projects = await getGithubProjects(data.public_repos);
      if (projects && projects.length > 0) {
        setGithubProjects(projects);
        try {
          const modeKey = sanitizedConfig.projects.github.mode || 'automatic';
          localStorage.setItem(
            `gitprofile_repos_${sanitizedConfig.github.username}_${modeKey}`,
            JSON.stringify(projects),
          );
        } catch {}
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        (error.response?.status === 403 || error.response?.status === 429)
      ) {
        console.warn(
          'GitHub rate limit reached (403/429). Using cached/fallback profile data.',
        );
        setProfile((prev) =>
          prev
            ? prev
            : sanitizedConfig.github.username === 'shawon-barua'
              ? FALLBACK_PROFILE
              : null,
        );
        setGithubProjects((prev) =>
          prev && prev.length > 0
            ? prev
            : sanitizedConfig.github.username === 'shawon-barua'
              ? FALLBACK_GITHUB_PROJECTS
              : [],
        );
        setError(null);
      } else {
        handleError(error as AxiosError | Error);
      }
    } finally {
      setLoading(false);
    }
  }, [
    sanitizedConfig.github.username,
    sanitizedConfig.projects.github.display,
    getGithubProjects,
  ]);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
      loadData();
    }
  }, [sanitizedConfig, loadData]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleError = (error: AxiosError | Error): void => {
    console.error('Error:', error);

    if (error instanceof AxiosError) {
      try {
        const reset = formatDistance(
          new Date(error.response?.headers?.['x-ratelimit-reset'] * 1000),
          new Date(),
          { addSuffix: true },
        );

        if (typeof error.response?.status === 'number') {
          switch (error.response.status) {
            case 403:
            case 429:
              // If we already have profile or fallback data, do not crash the UI with an error screen
              if (profile || sanitizedConfig.github.username === 'shawon-barua') {
                setError(null);
              } else {
                setError(setTooManyRequestError(reset));
              }
              break;
            case 404:
              setError(INVALID_GITHUB_USERNAME_ERROR);
              break;
            default:
              setError(GENERIC_ERROR);
              break;
          }
        } else {
          setError(GENERIC_ERROR);
        }
      } catch (innerError) {
        setError(GENERIC_ERROR);
      }
    } else {
      setError(GENERIC_ERROR);
    }
  };

  return (
    <HelmetProvider>
      <div className="fade-in h-screen">
        {error ? (
          <ErrorPage
            status={error.status}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <>
            <HeadTagEditor
              googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
              appliedTheme={theme}
            />
            <div className={`p-4 lg:p-10 min-h-full ${BG_COLOR}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {!sanitizedConfig.themeConfig.disableSwitch && (
                      <ThemeChanger
                        theme={theme}
                        setTheme={setTheme}
                        loading={loading}
                        themeConfig={sanitizedConfig.themeConfig}
                      />
                    )}
                    <AvatarCard
                      profile={profile}
                      loading={loading}
                      avatarRing={sanitizedConfig.themeConfig.displayAvatarRing}
                      resumeFileUrl={sanitizedConfig.resume.fileUrl}
                    />
                    <DetailsCard
                      profile={profile}
                      loading={loading}
                      github={sanitizedConfig.github}
                      social={sanitizedConfig.social}
                    />
                    {sanitizedConfig.skills.length !== 0 && (
                      <SkillCard
                        loading={loading}
                        skills={sanitizedConfig.skills}
                      />
                    )}
                    {sanitizedConfig.experiences.length !== 0 && (
                      <ExperienceCard
                        loading={loading}
                        experiences={sanitizedConfig.experiences}
                      />
                    )}
                    {sanitizedConfig.educations.length !== 0 && (
                      <EducationCard
                        loading={loading}
                        educations={sanitizedConfig.educations}
                      />
                    )}
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {sanitizedConfig.projects.github.display && (
                      <GithubProjectCard
                        header={sanitizedConfig.projects.github.header}
                        limit={sanitizedConfig.projects.github.automatic.limit}
                        githubProjects={githubProjects}
                        loading={loading}
                        username={sanitizedConfig.github.username}
                        googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                      />
                    )}
                    {sanitizedConfig.publications.length !== 0 && (
                      <PublicationCard
                        loading={loading}
                        publications={sanitizedConfig.publications}
                      />
                    )}
                    {sanitizedConfig.projects.external.projects.length !==
                      0 && (
                      <ExternalProjectCard
                        loading={loading}
                        header={sanitizedConfig.projects.external.header}
                        externalProjects={
                          sanitizedConfig.projects.external.projects
                        }
                        googleAnalyticId={sanitizedConfig.googleAnalytics.id}
                      />
                    )}
                    {sanitizedConfig.certifications.length !== 0 && (
                      <CertificationCard
                        loading={loading}
                        certifications={sanitizedConfig.certifications}
                      />
                    )}
                    {sanitizedConfig.blog.display && (
                      <BlogCard
                        loading={loading}
                        googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                        blog={sanitizedConfig.blog}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {sanitizedConfig.footer && (
              <footer
                className={`p-4 footer ${BG_COLOR} text-base-content footer-center`}
              >
                <div className="card compact bg-base-100 shadow">
                  <Footer content={sanitizedConfig.footer} loading={loading} />
                </div>
              </footer>
            )}
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default GitProfile;
