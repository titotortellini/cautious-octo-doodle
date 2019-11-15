import React, { Component } from "react";
import ProjectItem from "./projectItem";
import { getProjectItems } from "../services/projectsService";

class Projects extends Component {
  state = { portfolioItems: [] };

  componentDidMount() {
    this.setState({ portfolioItems: getProjectItems() });
  }
  render() {
    const { portfolioItems: items } = this.state;

    return (
      <React.Fragment>
        <h1>My Work</h1>

        <div className="portfolio-items-wrap">
          {items.map(item => (
            <ProjectItem
              key={item.id}
              title={item.title}
              categories={item.categories}
              thumbnail={item.thumbnail}
              link={item.link}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
