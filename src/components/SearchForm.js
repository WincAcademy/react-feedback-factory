import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../assets/img/search.svg';
import Input from './shared/Input';
import Button from './shared/Button';

class SearchForm extends Component {
  state = {
    form: {
      user: null,
      repo: null,
      branch: null,
    }
  };

  setInput = (key) => (e) => {
    const form = { ...this.state.form };
    form[key] = e.target.value;
    this.setState({ ...this.state, form });
  };

  submit = (e) => {
    e.preventDefault();
    const form = { ...this.state.form };
    this.props.onSubmit(form);
  };

  render() {
    const { disabled } = this.props;

    return (
      <form className="search-form" onSubmit={this.submit}>
        <Input type="text" name="user" placeholder="User" onChange={this.setInput('user')}/>
        <Input type="text" name="repo" placeholder="Repository" onChange={this.setInput('repo')}/>
        <Button type="submit" disabled={disabled}>
          <SearchIcon/> Search
        </Button>
      </form>
    );
  }
}

export default SearchForm;

