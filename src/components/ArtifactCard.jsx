import './ArtifactCard.css';
import { downloadArtifact } from '../utils/downloadArtifact.js';

function ArtifactCard({ artifact, onClick }) {
    const handleDownload = async (e) => {
        e.stopPropagation();
        await downloadArtifact(artifact);
    };

    return (
        <div className="artifact-card" onClick={() => onClick(artifact)}>
            <div className="artifact-image">
                <img src={artifact.image} alt={artifact.title} />
                {artifact.privacy && artifact.privacy.identityProtected && (
                    <div className="privacy-overlay">
                        <span className="privacy-icon">🔒</span>
                    </div>
                )}
            </div>
            <div className="artifact-info">
                <div className="artifact-header">
                    <h3>{artifact.title}</h3>
                    <button
                        className="download-btn-card"
                        onClick={handleDownload}
                        aria-label={`Download ${artifact.title}`}
                    >
                        Download
                    </button>
                </div>
                
                {/* Subject & Location Preview */}
                <div className="artifact-preview">
                    {artifact.subject && (
                        <p className="preview-item">
                            <span className="preview-label">Subject:</span> {artifact.subject.name}
                            {artifact.subject.isPseudonym && <span className="pseudonym-indicator">*</span>}
                        </p>
                    )}
                    {artifact.location && (
                        <p className="preview-item">
                            <span className="preview-label">Location:</span> {artifact.location.city}, {artifact.location.state}
                        </p>
                    )}
                </div>
                
                {artifact.tags && artifact.tags.length > 0 && (
                    <div className="artifact-tags">
                        {artifact.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                        {artifact.tags.length > 3 && (
                            <span className="tag tag-more">+{artifact.tags.length - 3} more</span>
                        )}
                    </div>
                )}
                
                <div className="artifact-meta-row">
                    {artifact.uploader && (
                        <p className="artifact-meta">
                            <span className="meta-icon">👤</span> {artifact.uploader}
                        </p>
                    )}
                    {artifact.uploadDate && (
                        <p className="artifact-meta">
                            <span className="meta-icon">📅</span> {new Date(artifact.uploadDate).toLocaleDateString()}
                        </p>
                    )}
                </div>
                
                {/* Consent & IRB Indicators */}
                {artifact.consent && artifact.consent.irbApproved && (
                    <div className="irb-indicator">
                        <span className="irb-check">✓</span> IRB Approved
                    </div>
                )}
            </div>
        </div>
    );
}

export default ArtifactCard;
