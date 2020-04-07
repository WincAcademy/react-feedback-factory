import React, { Component } from 'react';
import SearchForm from "../components/SearchForm";
import { getFeedback } from "../services/FeedbackService";
import { ReactComponent as Loader } from '../assets/img/loader.svg';
import FeedbackFile from "../components/FeedbackFile";
import TreeView, { mapTreeNode } from "../components/TreeView";
import Button from "../components/shared/Button";
import FeedbackDialog from "../components/FeedbackDialog";

export default class Review extends Component {
  state = {
    loading: false,
    result: null,
    tree: null,
    filter: '',
    showModal: false,
  };

  submitForm = (data) => {
    this.setState({ loading: true, active: {} });

    getFeedback(data.user, data.repo)
      .then(res => this.setResult(res.data))
      .catch(err => this.setResult(null));
  };

  setResult(data) {
    this.setState({
      loading: false,
      result: data ? data.result : null,
      tree: data ? [mapTreeNode(data.tree)] : null
    });
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
    const { loading, result } = this.state;

    return (
      <div className="app-page">
        <section className="app-toolbar">
          <SearchForm disabled={loading} onSubmit={this.submitForm}/>
        </section>
        <section className={"app-content" + (loading ? " loading" : "")}>
          <aside className="app-sidebar">
            { result && this.getSidebar() }
          </aside>
          <div className="app-view">
            { result && this.getFiles() }
          </div>
        </section>
        { loading && <Loader className="loader"/> }
      </div>
    );
  }
}
