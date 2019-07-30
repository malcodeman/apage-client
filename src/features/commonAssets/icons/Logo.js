import React from "react";
import PropTypes from "prop-types";

function Logo(props) {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
    </svg>
  );
}

Logo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Logo.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default Logo;
