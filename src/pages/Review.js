import React, { Component } from 'react';
import SearchForm from "../components/SearchForm";
import { getFeedback } from "../services/FeedbackService";
import { ReactComponent as Loader } from '../assets/img/loader.svg';
import FeedbackFile from "../components/FeedbackFile";

export default class Review extends Component {
  state = {
    loading: false,
    result: null,
    active: {}
  };

  submitForm = (data) => {
    this.setState({ loading: true, active: {} });

    getFeedback(data.user, data.repo)
      .then(result => {
        if (result.error) {
          throw result.error;
        } else {
          this.setState({ loading: false, result: result });
        }
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

    return result.data.map((feedback, index) => {
      const classNames = active[index] ? '' : 'collapsed';

      return (
        <FeedbackFile
          key={feedback.file.path}
          feedback={feedback}
          classNames={classNames}
          onToggle={() => this.toggleFile(index)}
          onSelectLine={(ln) => alert(ln)}
        />
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
