import React, { Component } from 'react';
import Highlight from "./shared/Highlight";
import LintMessage from "./shared/LintMessage";

class FeedbackFile extends Component {
  state = {
    active: false
  };

  toggle = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { active } = this.state;
    const { feedback, onSelectLine } = this.props;
    const { result, file } = feedback;

    return (
      <div className={"file " + (active ? "" : "collapsed")}>
        <div className="file-header" onClick={this.toggle}>
          <div>{file.name}</div>
          <small>{file.path}</small>
        </div>
        <div className="file-content">
          <Highlight code={file.content} onSelectLine={onSelectLine}/>
        </div>
        <div className="file-footer">
          Passed: {result.passed.toString()}
          {result.errors.map((error, i) => <LintMessage key={i} error={error}/>)}
        </div>
      </div>
    );
  }
}

export default FeedbackFile;

