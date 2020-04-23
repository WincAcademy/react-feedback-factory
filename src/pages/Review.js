import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from "../components/ReviewForm";
import Button from "../components/shared/Button";
import { generatePDF } from "../services/ReviewService";

const Review = () => {
  const [data, setData] = useState({});

  const save = (value) => {
    setData({ ...value });
  };

  const download = () => {
    const { student, status, positives, improvements, remarks } = data;
    generatePDF(student, 'Jason Koolman', status, positives, improvements, remarks);
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
        <Button variant="basic" onClick={download}>Generate PDF</Button>
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
