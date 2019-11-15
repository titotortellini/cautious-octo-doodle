import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/about";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import ProjectPage from "./components/projectPage";
import Intro from "./components/intro";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./style/App.scss";

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/projects/category/:id" component={Projects} />
          <Route
            path="/projects/stl-recycles"
            render={() => <ProjectPage projectId="1" />}
          />
          <Route
            path="/projects/kdhx"
            render={() => <ProjectPage projectId="2" />}
          />
          <Route
            path="/projects/rosemann"
            render={() => <ProjectPage projectId="3" />}
          />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Intro} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
