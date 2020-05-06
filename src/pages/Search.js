import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProject, removeProject } from '../redux/actions';
import { getProjects } from "../redux/selectors";
import { getFeedback } from '../services/FeedbackService';
import { ReactComponent as Loader } from '../assets/img/loader.svg';
import SearchForm from '../components/SearchForm';
import Button from "../components/shared/Button";

class Search extends Component {
  state = {
    loading: false
  };

  submitForm = (data) => {
    this.setState({ loading: true });

    getFeedback(data.user, data.repo)
      .then(res => this.setResult(res.data))
      .catch(err => this.setResult(null));
  };

  setResult(data) {
    this.setState({ loading: false });

    if (data) {
      const id = btoa(data.repo.slug);
      this.props.addProject(id, data);
    }
  }

  renderProjects() {
    const { projects, history, removeProject } = this.props;

    const items = Object.keys(projects).map(key => (
      <li key={key} onClick={() => history.push(`/project/${key}`)}>
        { projects[key].repo.slug }
        <Button variant="basic" size="sm" onClick={() => removeProject(key)}>Delete</Button>
      </li>
    ));

    return (
      <ul className="project-list">{ items }</ul>
    );
  }

  render() {
    const { loading } = this.state;
    const { projects } = this.props;

    return (
      <div className="app-page">
        <section className="app-toolbar">
          <SearchForm disabled={loading} onSubmit={this.submitForm}/>
        </section>
        { projects && this.renderProjects() }
        { loading && <Loader className="loader"/> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const projects = getProjects(state);
  return { projects };
};

export default connect(
  mapStateToProps,
  { addProject, removeProject }
)(Search);
