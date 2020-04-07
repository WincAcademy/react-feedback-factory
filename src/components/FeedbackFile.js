import React, { Component } from 'react';
import Highlight from "./shared/Highlight";

class FeedbackFile extends Component {
  state = {
    active: false
  };

  toggle = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { active } = this.state;
    const { feedback } = this.props;
    const { result, file } = feedback;

    const loaded = (element) => {
      // manipulate the DOM in order to append linter messages to
      // the highlight block, don't try this at home
      result.errors.forEach((error) => {
        const line = element.querySelector(`div[data-line-number="${error.line}"]`);
        if (line && !line.dataset.lintMessage) {
          line.dataset.lintMessage = error.severity;
          line.addEventListener('click', (e) => {
            alert(JSON.stringify(error, null, 1));
            e.stopPropagation();
          })
        }
      });
    };

    return (
      <div className={"file " + (active ? "" : "collapsed")}>
        <div className="file-header" onClick={this.toggle}>
          <div>{file.name}</div>
          <small>{file.path}</small>
        </div>
        <div className="file-content">
          <Highlight code={file.content} onInit={loaded} onSelectLine={() => {}}/>
        </div>
      </div>
    );
  }
}

export default FeedbackFile;

