import './ArtifactCard.css';

function ArtifactCard({ artifact, onClick }) {
  return (
    <div className="artifact-card" onClick={() => onClick(artifact)}>
      <div className="artifact-image">
        <img src={artifact.image} alt={artifact.title} />
      </div>
      <div className="artifact-info">
        <h3>{artifact.title}</h3>
        {artifact.tags && artifact.tags.length > 0 && (
          <div className="artifact-tags">
            {artifact.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
        {artifact.uploader && (
          <p className="artifact-meta">Uploaded by: {artifact.uploader}</p>
        )}
        {artifact.uploadDate && (
          <p className="artifact-meta">Date: {new Date(artifact.uploadDate).toLocaleDateString()}</p>
        )}
      </div>
    </div>
  );
}

export default ArtifactCard;
