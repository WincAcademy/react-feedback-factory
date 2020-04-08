import React from 'react';
import { Link } from 'react-router-dom';
import { REVIEW_TEMPLATE } from "../constants";
import Editor from "../components/shared/Editor";

const Review = (props) => {
  const content = {
    time: Date.now(),
    blocks: REVIEW_TEMPLATE
  };

  const save = (data) => {
    console.log(data);
  };

  return (
    <div className="app-page">
      <section className="app-content">
        <aside className="app-sidebar">
          <Link to={"."} className="block">Return to project</Link>
        </aside>
        <div className="app-view">
          <Editor data={content} onSave={save}/>
        </div>
      </section>
    </div>
  );
};

export default Review;
