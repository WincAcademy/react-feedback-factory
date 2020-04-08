import React from "react";
import EditorJs from "react-editor-js";
import { EDITOR_TOOLS } from "../../constants";

const Editor = ({ data, tools, onSave }) => {
  let instance = null;

  const handleChange = async () => {
    const data = await instance.save();
    return onSave(data);
  };

  return (
    <div className="editor">
      <EditorJs
        data={data}
        tools={tools || EDITOR_TOOLS}
        onChange={onSave && handleChange}
        instanceRef={ref => instance = ref}
      />
    </div>
  )
}

export default Editor;
