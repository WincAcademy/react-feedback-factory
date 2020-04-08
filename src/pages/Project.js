import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FeedbackFile from "../components/FeedbackFile";
import TreeView, { mapTreeNode } from "../components/TreeView";
import Button from "../components/shared/Button";
import { connect } from "react-redux";
import { getProject } from "../redux/selectors";

const Project = (props) => {
  const history = useHistory();
  const [project, setProject] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const project = props.project;

    if (project) {
      setProject({
        repo: project.repo,
        result: project.result,
        tree: [mapTreeNode(project.tree)],
      });
    } else {
      history.push('/'); // not found
    }
  }, [props.project, history]);

  const getFiles = () => {
    const result = project.result;

    const filtered = result.filter(feedback =>
      (filter ? feedback.file.path.includes(filter) : true)
    );

    if (filtered.length === 0) {
      return 'No validated files found';
    }

    return filtered.map((feedback, i) =>(
      <FeedbackFile key={feedback.file.path + i} feedback={feedback}/>
    ));
  };

  const toReview = () => history.push(`/project/${props.projectId}/review`);

  const getSidebar = () => {
    return (
      <React.Fragment>
        <Link className="block" to={".."}>
          Return to overview
        </Link>
        <div className="block">
          <h4>Project</h4>
          <small>{ project.repo.slug }</small>
        </div>
        <div className="block">
          <h4>Directory tree</h4>
          { <TreeView data={project.tree} onClickItem={(item) => setFilter(item.path)}/> }
        </div>
        <div className="block">
          <Button size="sm" onClick={toReview}>
            Write Review
          </Button>
        </div>
      </React.Fragment>
    )
  };

  return (
    <div className="app-page">
      <section className="app-content">
        <aside className="app-sidebar">
          { project && getSidebar() }
        </aside>
        <div className="app-view">
          { project && getFiles() }
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const projectId = props.match.params.id;
  const project = getProject(state, projectId);
  return { projectId, project };
};

export default connect(
  mapStateToProps,
  {}
)(Project);
