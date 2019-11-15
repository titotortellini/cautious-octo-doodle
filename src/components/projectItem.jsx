import React from "react";
import { Link } from "react-router-dom";
import "../style/App.scss";

const ProjectItem = props => {
  const { link, thumbnail, title, categories } = props;
  return (
    <div className="portfolio-item">
      <Link to={link}>
        <div className="project-image">
          <img src={window.location.origin + thumbnail} alt="Project Detail" />
        </div>
        <h3 className="project-title">{title}</h3>

        <div className="project-categories">
          {categories.map(category => (
            <div key={category.id} className="project-category">
              {category.name}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
