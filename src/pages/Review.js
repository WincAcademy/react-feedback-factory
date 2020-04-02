import React, { Component } from 'react';
import SearchForm from "../components/SearchForm";
import { getFeedback } from "../services/FeedbackService";
import { ReactComponent as Loader } from '../assets/img/loader.svg';
import FeedbackFile from "../components/FeedbackFile";
import TreeView, { mapNode } from "../components/TreeView";

export default class Review extends Component {
  state = {
    loading: false,
    result: [],
    tree: null,
    filter: ''
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
      tree: data ? [mapNode(data.tree)] : null
    });
  }

  getFiles() {
    const { result, filter } = this.state;
    const filtered = result.filter(feedback => feedback.file.path.includes(filter));

    if (filtered.length === 0) {
      return 'No validated files found';
    }

    return filtered.map((feedback, index) => {
      return (
        <FeedbackFile
          key={feedback.file.path}
          feedback={feedback}
          onSelectLine={(ln) => alert(ln)}
        />
      )
    });
  }

  getSidebar() {
    const tree = this.state.tree;
    const filter = (item) => this.setState({ filter: item.path });
    return tree && <TreeView data={tree} onClickItem={filter}/>
  }

  render() {
    const { loading, result } = this.state;

    return (
      <div className="app-page">
        <section className="app-toolbar">
          <SearchForm disabled={loading} onSubmit={this.submitForm}/>
        </section>
        <section className="app-content">
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
