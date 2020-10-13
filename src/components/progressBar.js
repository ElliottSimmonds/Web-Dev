// src/components/daysCompleted.js

import React from "react";
import PropTypes from "prop-types";

function ProgressBar(props) {
  const { percent } = props;

  const barStyle = {
    "background-color": "grey",
    "height": "30px",
    "width": percent+"%"
  };

  return (
    <div>
      <div style={barStyle}></div>
      <span>
          {percent}% to goal
      </span>
    </div>
  );
}

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
    percent: 0,
};

export default ProgressBar;
