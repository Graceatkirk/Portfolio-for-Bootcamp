import '../App.css';

const Project = ({ title, repoLink }) => (
  <div className="project">
    <h3>{title}</h3>
    <p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        View GitHub Repo
      </a>
    </p>
  </div>
);

export default Project;
