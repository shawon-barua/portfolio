import React, { useMemo, useState } from 'react';
import { SanitizedCertification } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FiExternalLink, FiSearch } from 'react-icons/fi';
import {
  FaRobot,
  FaVial,
  FaTasks,
  FaCloud,
  FaCode,
  FaLayerGroup,
} from 'react-icons/fa';

type CategoryId = 'all' | 'ai' | 'qa' | 'management' | 'cloud' | 'data_dev';

interface CategoryTab {
  id: CategoryId;
  label: string;
  icon: React.ReactNode;
}

const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', label: 'All', icon: <FaLayerGroup className="mr-1.5" /> },
  { id: 'ai', label: 'AI & Agentic', icon: <FaRobot className="mr-1.5" /> },
  { id: 'qa', label: 'QA & Automation', icon: <FaVial className="mr-1.5" /> },
  {
    id: 'management',
    label: 'Management & Agile',
    icon: <FaTasks className="mr-1.5" />,
  },
  { id: 'cloud', label: 'Cloud & DevOps', icon: <FaCloud className="mr-1.5" /> },
  {
    id: 'data_dev',
    label: 'Data Science & Dev',
    icon: <FaCode className="mr-1.5" />,
  },
];

const getCertificateCategory = (cert: SanitizedCertification): CategoryId => {
  const text = `${cert.name} ${cert.body}`.toLowerCase();

  if (
    text.includes('agentic') ||
    text.includes('generative ai') ||
    text.includes('machine learning') ||
    text.includes('ai product') ||
    text.includes('ai essentials') ||
    text.includes('sagemaker') ||
    text.includes('artificial intelligence')
  ) {
    return 'ai';
  }

  if (
    text.includes('playwright') ||
    text.includes('cypress') ||
    text.includes('selenium') ||
    text.includes('testng') ||
    text.includes('jmeter') ||
    text.includes('test automation') ||
    text.includes('api testing') ||
    text.includes('jest') ||
    text.includes('locator') ||
    text.includes('intellij') ||
    text.includes('load testing') ||
    text.includes('testing')
  ) {
    return 'qa';
  }

  if (
    text.includes('project management') ||
    text.includes('product management') ||
    text.includes('jira') ||
    text.includes('agile') ||
    text.includes('employability') ||
    text.includes('communication') ||
    text.includes('mentor')
  ) {
    return 'management';
  }

  if (
    text.includes('docker') ||
    text.includes('kubernetes') ||
    text.includes('aws') ||
    text.includes('git') ||
    text.includes('command line') ||
    text.includes('bash') ||
    text.includes('security')
  ) {
    return 'cloud';
  }

  return 'data_dev';
};

const ListItem = ({
  year,
  name,
  body,
  link,
}: {
  year?: React.ReactNode;
  name?: React.ReactNode;
  body?: React.ReactNode;
  link?: string;
}) => (
  <li className="mb-5 ml-4 group">
    <div
      className="absolute w-2.5 h-2.5 bg-primary rounded-full border border-base-100 mt-1.5 transition-transform group-hover:scale-125"
      style={{ left: '-5.5px' }}
    ></div>
    <div className="flex flex-wrap items-center gap-2 my-0.5">
      <span className="badge badge-sm badge-outline text-xs opacity-75">
        {year}
      </span>
    </div>
    <div className="font-semibold text-base mt-1">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
        >
          <span>{name}</span>
          <FiExternalLink className="text-xs opacity-60 group-hover:opacity-100 inline" />
        </a>
      ) : (
        <span>{name}</span>
      )}
    </div>
    <h3 className="mb-2 text-xs font-medium opacity-70">{body}</h3>
  </li>
);

const INITIAL_DISPLAY_LIMIT = 8;

const CertificationCard = ({
  certifications,
  loading,
}: {
  certifications: SanitizedCertification[];
  loading: boolean;
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      all: certifications.length,
      ai: 0,
      qa: 0,
      management: 0,
      cloud: 0,
      data_dev: 0,
    };
    certifications.forEach((c) => {
      const cat = getCertificateCategory(c);
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [certifications]);

  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory =
        activeCategory === 'all' ||
        getCertificateCategory(cert) === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        (cert.name && cert.name.toLowerCase().includes(q)) ||
        (cert.body && cert.body.toLowerCase().includes(q)) ||
        (cert.year && cert.year.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [certifications, activeCategory, searchQuery]);

  const displayedCertifications = useMemo(() => {
    if (showAll || searchQuery.trim() !== '') {
      return filteredCertifications;
    }
    return filteredCertifications.slice(0, INITIAL_DISPLAY_LIMIT);
  }, [filteredCertifications, showAll, searchQuery]);

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 3; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          name={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          body={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }
    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        {/* Header */}
        <div className="mx-3 flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-base-200">
          <div className="flex items-center gap-2">
            <h5 className="card-title text-base-content opacity-90 font-bold">
              {loading ? (
                skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
              ) : (
                <>
                  <span>Licenses & Certifications</span>
                  <span className="badge badge-sm badge-primary">
                    {certifications.length}
                  </span>
                </>
              )}
            </h5>
          </div>

          {/* Quick Search */}
          {!loading && certifications.length > 5 && (
            <div className="relative w-full sm:w-60">
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowAll(true);
                }}
                className="input input-sm input-bordered w-full pl-8 text-xs bg-base-200 focus:bg-base-100"
              />
              <FiSearch className="absolute left-2.5 top-2.5 text-xs opacity-50" />
            </div>
          )}
        </div>

        {/* Category Tabs */}
        {!loading && (
          <div className="flex flex-wrap gap-1.5 px-3 py-2">
            {CATEGORY_TABS.map((tab) => {
              const count = categoryCounts[tab.id] || 0;
              if (count === 0 && tab.id !== 'all') return null;
              const isActive = activeCategory === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setShowAll(false);
                  }}
                  className={`btn btn-xs rounded-full normal-case font-medium transition-all ${
                    isActive
                      ? 'btn-primary shadow-sm'
                      : 'btn-ghost bg-base-200 hover:bg-base-300 opacity-80'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-primary-content text-primary font-bold'
                        : 'bg-base-300'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Certifications Timeline */}
        <div className="text-base-content text-opacity-80 pt-2">
          {loading ? (
            <ol className="relative border-l border-base-300 border-opacity-40 my-2 mx-4">
              {renderSkeleton()}
            </ol>
          ) : filteredCertifications.length === 0 ? (
            <div className="text-center py-6 opacity-60 text-sm">
              No certifications found matching your criteria.
            </div>
          ) : (
            <>
              <ol className="relative border-l border-base-300 border-opacity-40 my-2 mx-4">
                {displayedCertifications.map((certification, index) => (
                  <ListItem
                    key={`${certification.name}-${index}`}
                    year={certification.year}
                    name={certification.name}
                    body={certification.body}
                    link={certification.link}
                  />
                ))}
              </ol>

              {/* Show More / Show Less Button */}
              {filteredCertifications.length > INITIAL_DISPLAY_LIMIT &&
                searchQuery.trim() === '' && (
                  <div className="text-center mt-3 pt-2 border-t border-base-200">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="btn btn-sm btn-ghost text-primary text-xs hover:bg-base-200"
                    >
                      {showAll
                        ? 'Show Less'
                        : `View All ${filteredCertifications.length} in this category (${filteredCertifications.length - INITIAL_DISPLAY_LIMIT} more)`}
                    </button>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;

