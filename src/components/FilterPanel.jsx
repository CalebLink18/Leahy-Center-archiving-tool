import { useState } from 'react';
import './FilterPanel.css';

function FilterPanel({ isOpen, onClose, filterOptions, onFilterChange }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedFileTypes, setSelectedFileTypes] = useState([]);
  const [selectedUploaders, setSelectedUploaders] = useState([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const handleTagToggle = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    updateFilters({ tags: newTags });
  };

  const handleFileTypeToggle = (fileType) => {
    const newFileTypes = selectedFileTypes.includes(fileType)
      ? selectedFileTypes.filter(ft => ft !== fileType)
      : [...selectedFileTypes, fileType];
    setSelectedFileTypes(newFileTypes);
    updateFilters({ fileTypes: newFileTypes });
  };

  const handleUploaderToggle = (uploader) => {
    const newUploaders = selectedUploaders.includes(uploader)
      ? selectedUploaders.filter(u => u !== uploader)
      : [...selectedUploaders, uploader];
    setSelectedUploaders(newUploaders);
    updateFilters({ uploaders: newUploaders });
  };

  const updateFilters = (changes) => {
    onFilterChange({
      tags: changes.tags ?? selectedTags,
      fileTypes: changes.fileTypes ?? selectedFileTypes,
      uploaders: changes.uploaders ?? selectedUploaders,
      dateRange
    });
  };

  const clearAllFilters = () => {
    setSelectedTags([]);
    setSelectedFileTypes([]);
    setSelectedUploaders([]);
    setDateRange({ start: '', end: '' });
    onFilterChange({
      tags: [],
      fileTypes: [],
      uploaders: [],
      dateRange: { start: '', end: '' }
    });
  };

  return (
    <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
      <div className="filter-header">
        <h2>Filters</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="filter-content">
        <button className="clear-filters-btn" onClick={clearAllFilters}>
          Clear All Filters
        </button>

        <div className="filter-section">
          <h3>Tags</h3>
          <div className="filter-options">
            {filterOptions.tags.map(tag => (
              <label key={tag} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagToggle(tag)}
                />
                <span>{tag}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h3>File Type</h3>
          <div className="filter-options">
            {filterOptions.fileTypes.map(fileType => (
              <label key={fileType} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={selectedFileTypes.includes(fileType)}
                  onChange={() => handleFileTypeToggle(fileType)}
                />
                <span>{fileType.split('/')[1].toUpperCase()}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h3>Uploader</h3>
          <div className="filter-options">
            {filterOptions.uploaders.map(uploader => (
              <label key={uploader} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={selectedUploaders.includes(uploader)}
                  onChange={() => handleUploaderToggle(uploader)}
                />
                <span>{uploader}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h3>Upload Date Range</h3>
          <div className="date-inputs">
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => {
                const newDateRange = { ...dateRange, start: e.target.value };
                setDateRange(newDateRange);
                onFilterChange({
                  tags: selectedTags,
                  fileTypes: selectedFileTypes,
                  uploaders: selectedUploaders,
                  dateRange: newDateRange
                });
              }}
              placeholder="Start date"
            />
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => {
                const newDateRange = { ...dateRange, end: e.target.value };
                setDateRange(newDateRange);
                onFilterChange({
                  tags: selectedTags,
                  fileTypes: selectedFileTypes,
                  uploaders: selectedUploaders,
                  dateRange: newDateRange
                });
              }}
              placeholder="End date"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
