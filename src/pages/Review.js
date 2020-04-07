import React, { Component } from 'react';
import FeedbackFile from "../components/FeedbackFile";
import TreeView, { mapTreeNode } from "../components/TreeView";
import Button from "../components/shared/Button";
import FeedbackDialog from "../components/FeedbackDialog";
import { connect } from "react-redux";
import { getProject } from "../redux/selectors";

class Review extends Component {
  state = {
    repo: null,
    result: null,
    tree: null,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const project = this.props.project;

    if (project) {
      this.setState({
        repo: project.repo,
        result: project.result,
        tree: [mapTreeNode(project.tree)],
      });
    }
  }

  getFiles() {
    const { result, filter } = this.state;

    const filtered = result.filter(feedback =>
      (filter ? feedback.file.path.includes(filter) : true)
    );

    if (filtered.length === 0) {
      return 'No validated files found';
    }

    return filtered.map((feedback, i) => {
      return (
        <FeedbackFile key={feedback.file.path + i} feedback={feedback}/>
      );
    });
  }

  getSidebar() {
    const { tree, showModal } = this.state;
    const filter = (item) => this.setState({ filter: item.path });
    const setShowModal = (bool) => this.setState({ showModal: bool });

    return (
      <React.Fragment>
        <div className="block">
          <h4>Project</h4>
          <FeedbackDialog show={showModal} onHide={() => setShowModal(false)}/>
          <Button size="sm" onClick={() => setShowModal(true)}>
            Feedback
          </Button>
        </div>
        <div className="block">
          <h4>Directory tree</h4>
          { tree && <TreeView data={tree} onClickItem={filter}/> }
        </div>
      </React.Fragment>
    )
  }

  render() {
    const { result, repo } = this.state;

    return (
      <div className="app-page">
        <section className="app-toolbar">
          { repo && repo.slug }
        </section>
        <section className="app-content">
          <aside className="app-sidebar">
            { result && this.getSidebar() }
          </aside>
          <div className="app-view">
            { result && this.getFiles() }
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const project = getProject(state, props.match.params.id);
  return { project };
};

export default connect(
  mapStateToProps,
  {}
)(Review);
