import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from "../components/shared/Button";
import Editor from "../components/shared/Editor";

const Review = (props) => {
  const history = useHistory();
  const content = {
    time: Date.now(),
    blocks: [
      {
        type: "header",
        data: {
          text: "Feedback",
          level: 1
        }
      },
      {
        type: "paragraph",
        data: {
          text: "Start typing your review."
        }
      },
    ]
  };

  const save = (data) => {
    console.log(data);
  };

  return (
    <div className="app-page">
      <Editor data={content} onChange={save}>
        <Button size="sm" onClick={history.goBack}>Return to project</Button>
      </Editor>
    </div>
  );
};

export default Review;
