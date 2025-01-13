const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="progress-text">
        {progress.toFixed(0)}% ({current} of {total})
      </span>
    </div>
  );
};

export default ProgressBar;
