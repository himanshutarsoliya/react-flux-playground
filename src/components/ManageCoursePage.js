import React from "react";

const ManageCoursePage = (props) => {
  return (
    <React.Fragment>
      <h2> Manage Course</h2>
      {props.match.params.slug}
    </React.Fragment>
  );
};

export default ManageCoursePage;
