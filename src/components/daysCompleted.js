// src/components/daysCompleted.js

import React from "react";
import PropTypes from "prop-types";

function DaysCompleted(props) {
  const { days } = props;

  const divStyle = {
    "color": "purple",
    "text-align": "center"
  };

  return (
    <div style={divStyle}>
      <h1> {days} Days Completed</h1>
    </div>
  );
}

DaysCompleted.propTypes = {
  days: PropTypes.number,
};

DaysCompleted.defaultProps = {
  days: 0,
};

export default DaysCompleted;
