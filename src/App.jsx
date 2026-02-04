import { useState, useMemo } from 'react'
import './App.css'
import ArtifactCard from './components/ArtifactCard'
import FilterPanel from './components/FilterPanel'
import DetailPanel from './components/DetailPanel'
import { artifacts, filterOptions } from './data/artifacts'

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const [filters, setFilters] = useState({
    tags: [],
    fileTypes: [],
    uploaders: [],
    dateRange: { start: '', end: '' }
  });

  // Filter artifacts based on selected filters
  const filteredArtifacts = useMemo(() => {
    return artifacts.filter(artifact => {
      // Filter by tags
      if (filters.tags.length > 0) {
        const hasMatchingTag = artifact.tags.some(tag => filters.tags.includes(tag));
        if (!hasMatchingTag) return false;
      }

      // Filter by file type
      if (filters.fileTypes.length > 0) {
        if (!filters.fileTypes.includes(artifact.fileType)) return false;
      }

      // Filter by uploader
      if (filters.uploaders.length > 0) {
        if (!filters.uploaders.includes(artifact.uploader)) return false;
      }

      // Filter by date range
      if (filters.dateRange.start || filters.dateRange.end) {
        const artifactDate = new Date(artifact.uploadDate);
        if (filters.dateRange.start) {
          const startDate = new Date(filters.dateRange.start);
          if (artifactDate < startDate) return false;
        }
        if (filters.dateRange.end) {
          const endDate = new Date(filters.dateRange.end);
          if (artifactDate > endDate) return false;
        }
      }

      return true;
    });
  }, [filters]);

  const handleArtifactClick = (artifact) => {
    setSelectedArtifact(artifact);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => setSelectedArtifact(null), 300);
  };

  return (
    <div className="app">
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filterOptions={filterOptions}
        onFilterChange={setFilters}
      />

      <div className="main-content">
        <header className="app-header">
          <button
            className="hamburger-btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            aria-label="Toggle filters"
          >
            ☰
          </button>
          <h1>Digital Archive</h1>
          <div className="header-spacer"></div>
        </header>

        <div className="artifacts-grid">
          {filteredArtifacts.length > 0 ? (
            filteredArtifacts.map(artifact => (
              <ArtifactCard
                key={artifact.id}
                artifact={artifact}
                onClick={handleArtifactClick}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No artifacts found matching your filters.</p>
            </div>
          )}
        </div>
      </div>

      <DetailPanel
        artifact={selectedArtifact}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  )
}

export default App
