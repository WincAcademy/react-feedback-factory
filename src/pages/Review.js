import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setProjectReview } from "../redux/actions";
import { getProject } from "../redux/selectors";
import { generatePDF } from "../services/ReviewService";
import ReviewForm from "../components/ReviewForm";
import Button from "../components/shared/Button";

const Review = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const review = props.project.review || {};
    setData({ ...review });
  }, [props.project]);

  const save = (value) => {
    setData({ ...value });
    props.setProjectReview(props.projectId, value);
  };

  const download = () => {
    const { student, status, positives, improvements, remarks } = data;
    generatePDF(student, "Jason Koolman", status, positives, improvements, remarks);
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
        <ReviewForm initialValue={props.project.review} onSubmit={save}/>
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

const mapStateToProps = (state, props) => {
  const projectId = props.match.params.id;
  const project = getProject(state, projectId);
  return { projectId, project };
};

export default connect(
  mapStateToProps,
  { setProjectReview }
)(Review);
