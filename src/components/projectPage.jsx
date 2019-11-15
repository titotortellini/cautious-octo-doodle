import React, { Component } from "react";
import { getProject } from "../services/projectsService";
import { Link } from "react-router-dom";

class ProjectPage extends Component {
  state = {
    project: {
      categories: []
    }
  };

  componentDidMount() {
    const project = getProject(parseInt(this.props.projectId));
    this.setState({ project });
  }

  render() {
    const { title, description, thumbnail, categories } = this.state.project;

    return (
      <React.Fragment>
        <h1>{title}</h1>
        {/* <div className="project-categories">
          {categories.map(category => (
            <Link key={category.id} to={`/projects/category/${category.id}`}>
              {category.name}
            </Link>
          ))}
        </div> */}
        <p>{description}</p>
        <img src={thumbnail} alt="Project Thumbnail" />
      </React.Fragment>
    );
  }
}

export default ProjectPage;
