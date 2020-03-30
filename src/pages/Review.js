import React, { Component } from 'react';
import Highlight from "../components/shared/Highlight";
import SearchForm from "../components/SearchForm";
import { getFeedback } from "../services/FeedbackService";
import { ReactComponent as Loader } from '../assets/img/loader.svg';

export default class Review extends Component {
  state = {
    loading: false,
    result: null,
    active: {}
  };

  submitForm = (repo) => {
    this.setState({ loading: true, active: {} });

    getFeedback(repo)
      .then(result => {
        this.setState({ loading: false, result });
      })
      .catch(error => {
        this.setState({ loading: false, result: null });
      });
  };

  toggleFile = (index) => {
    const active = { ...this.state.active };
    active[index] = !active[index];
    this.setState({ active });
  };

  getFiles() {
    const { result, active } = this.state;

    return result.feedback.map((fb, index) => {
      const { result, file } = fb;
      const classNames = active[index] ? '' : ' collapsed';

      return (
        <div className={"file" + classNames} key={file.name + index}>
          <div className="file-header" onClick={() => this.toggleFile(index)}>
            {file.name}
          </div>
          <div className="file-content">
            <Highlight code={file.content} onSelectLine={(ln) => window.alert(ln)}/>
          </div>
          <div className="file-footer">
            Passed: {result.passed.toString()}
          </div>
        </div>
      )
    })
  }

  render() {
    const { loading, result } = this.state;

    return (
      <div className="container">
        <SearchForm disabled={loading} onSubmit={this.submitForm}/>
        { !loading && result && this.getFiles() }
        { loading && <Loader className="loader"/> }
      </div>
    );
  }
}
