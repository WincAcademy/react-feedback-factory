import React, { Component } from 'react';
import SearchForm from "../components/SearchForm";
import { getFeedback } from "../services/FeedbackService";
import { ReactComponent as Loader } from '../assets/img/loader.svg';
import FeedbackFile from "../components/FeedbackFile";
import TreeMenu from "react-simple-tree-menu";
import Input from "../components/shared/Input";
import TreeItem from "../components/TreeItem";

export default class Review extends Component {
  state = {
    loading: false,
    result: [],
    tree: null,
    active: {},
    filter: ''
  };

  submitForm = (data) => {
    this.setState({ loading: true, active: {} });

    getFeedback(data.user, data.repo)
      .then(res => {
        if (res.error) {
          throw res.error;
        } else {
          this.setResult(res.data);
        }
      })
      .catch(err => {
        this.setResult(null);
      });
  };

  setResult(data) {
    this.setState({
      loading: false,
      result: data ? data.result : null,
      tree: data ? [this.mapTree(data.tree)] : null
    });
  }

  toggleFile = (index) => {
    const active = { ...this.state.active };
    active[index] = !active[index];
    this.setState({ active });
  };

  mapTree(item) {
    const result = {};

    result.key = item.path;
    result.label = item.name;
    result.type = item.type;

    if (item.type === 'directory') {
      result.nodes = item.children
        .map(child => this.mapTree(child))
        .sort((a, b) => a.type.localeCompare(b.type));
    }

    return result;
  }

  getFiles() {
    const { result, active, filter } = this.state;
    const filtered = result.filter(feedback => feedback.file.path.includes(filter));

    if (filtered.length === 0) {
      return "No files found";
    }

    return filtered.map((feedback, index) => {
      return (
        <FeedbackFile
          key={feedback.file.path}
          feedback={feedback}
          classNames={active[index] ? '' : 'collapsed'}
          onToggle={() => this.toggleFile(index)}
          onSelectLine={(ln) => alert(ln)}
        />
      )
    });
  }

  clickItem = (item) =>{
    this.setState({
      filter: item.key
    });
  };

  getSidebar() {
    const tree = this.state.tree;
    const activeItem = 'root';

    return tree && <TreeMenu
      data={tree}
      onClickItem={this.clickItem}
      initialActiveKey={activeItem}
    >
      {({ search, items }) => (
        <React.Fragment>
          <Input className="tree-search" onChange={e => search(e.target.value)} placeholder="Search repository" />
          <ul className="tree-view">
            {items.map(({key, ...props}) => (
              <TreeItem key={key} {...props} />
            ))}
          </ul>
        </React.Fragment>
      )}
    </TreeMenu>
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
