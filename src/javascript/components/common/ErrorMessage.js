import React from "react";
import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
  return <p className="danger">{message}</p>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
  message: "An error occured",
};
