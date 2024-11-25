import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section className="portfolio-section">
    <h2>My Projects</h2>
    <div className="projects-list">
      <Project
        title="Hist-O-Match"
        repoLink="https://github.com/Graceatkirk/Hist-O-Match"
      />
      <Project
        title="Social-Network-API"
        repoLink="https://github.com/Graceatkirk/Social-Network-API"
      />
      <Project
        title="README-Generator"
        repoLink="https://github.com/Graceatkirk/Readme-Generator"
      />
      {/* Add more Project's when I have em */}
    </div>
  </section>
);

export default Portfolio;
