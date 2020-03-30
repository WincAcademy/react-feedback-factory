import React, { Component } from 'react';
import Highlight from "./shared/Highlight";

class FileView extends Component {
  state = {
    file: {}
  };

  render() {
    const { file } = this.state;

    return (
      <div className="file">
        <div className="file-header">
          {file.name}
        </div>
        <div className="file-content">
          <Highlight code={file.content}/>
        </div>
        <div className="file-footer"></div>
      </div>
    );
  }
}

export default FileView;

