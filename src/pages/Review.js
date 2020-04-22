import React from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from "../components/ReviewForm";

const Review = () => {
  const save = (data) => {
    console.log(data);
  };

  const getSidebar = () => {
    return (
      <React.Fragment>
        <Link className="block" to={"."}>
          Return to project
        </Link>
        <div className="block">
          <h4>My notes</h4>
          <span>Coming soon</span>
        </div>
      </React.Fragment>
    )
  };

  const getView = () => {
    return (
      <div className="review-container">
        <h2>Review</h2>
        <ReviewForm onSubmit={save}/>
      </div>
    )
  };

  return (
    <div className="app-page">
      <section className="app-content">
        <aside className="app-sidebar">
          { getSidebar() }
        </aside>
        <div className="app-view">
          { getView() }
        </div>
      </section>
    </div>
  );
};

export default Review;
