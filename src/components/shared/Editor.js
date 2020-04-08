import React, {Component} from "react";
import EditorJs from "react-editor-js";
import { EDITOR_TOOLS } from "../../constants";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
  }

  render() {
    const { children, data, tools, onChange } = this.props;

    const init = () => {
      console.log(this.editorRef.current.innerText);
    };

    return (
      <div className="editor" ref={this.editorRef}>
        <div className="editor-toolbar">
          { children }
        </div>
        <EditorJs
          data={data}
          tools={tools || EDITOR_TOOLS}
          onChange={onChange}
          onReady={init}
        />
      </div>
    )
  }
}

export default Editor;
