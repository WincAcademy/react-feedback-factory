import React, { Component } from 'react';
import Highlight from "./shared/Highlight";
import LintMessage from "./shared/LintMessage";

class FeedbackFile extends Component {
  render() {
    const { feedback, onToggle, onSelectLine, classNames } = this.props;
    const { result, file } = feedback;
    // const hasError = result.errors.some(e => e.severity === "error");

    return (
      <div className={"file " + classNames}>
        <div className="file-header" onClick={onToggle}>
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

