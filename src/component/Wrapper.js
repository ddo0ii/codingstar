import React from "react";
import PropTypes from "prop-types";

function Wrapper(props) {
  const style = {
    backgroundColor: "yellow",
  };

  return <div style={style}>{props.children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
