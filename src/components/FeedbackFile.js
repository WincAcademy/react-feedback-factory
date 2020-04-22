import React, { Component } from 'react';
import Highlight from "./shared/Highlight";

class FeedbackFile extends Component {
  state = {
    active: false
  };

  toggle = () => {
    this.setState({ active: !this.state.active });
  };

  lineProps = (line) => {
    const { result } = this.props.feedback
    const error = result.errors.find(e => e.line === line);

    if (!error) {
      return null;
    }

    return {
      'data-lint-message': error.severity,
      onClick() {
        alert(JSON.stringify(error, null, 1));
      }
    }
  };

  render() {
    const { active } = this.state;
    const { feedback } = this.props;
    const { file } = feedback;

    return (
      <div className={"file " + (active ? "" : "collapsed")}>
        <div className="file-header" onClick={this.toggle}>
          <div>{file.name}</div>
          <small>{file.path}</small>
        </div>
        <div className="file-content">
          { active && <Highlight code={file.content} lineProps={this.lineProps}/> }
        </div>
      </div>
    );
  }
}

export default FeedbackFile;

