import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../assets/img/search.svg';
import Input from './shared/Input';
import Button from './shared/Button';

class SearchForm extends Component {
  state = {
    repo: ''
  };

  setRepo = (e) => {
    this.setState({ repo: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.repo);
  };

  render() {
    const { disabled } = this.props;

    return (
      <form className="search-form" onSubmit={this.submit}>
        <Input type="text" name="repo" placeholder="WincAcademy/StudentDashboardExample" onChange={this.setRepo}/>
        <Button type="submit" disabled={disabled}>
          <SearchIcon/> Search
        </Button>
      </form>
    );
  }
}

export default SearchForm;

