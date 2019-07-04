import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  const { color, size } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.31172371,1.71547595 C7.69184821,1.3203295 8.30578971,1.31787407 8.68827629,1.71547595 L13.3117237,6.5216352 C13.6918482,6.91678165 14,7.67671996 14,8.23608091 L14,14.4906552 C14,14.7719586 13.7849426,15 13.5095215,15 L10.4904785,15 C10.2195947,15 10,14.7849426 10,14.5095215 L10,11 C10,11 10,9 8,9 C6,9 6.06572819,10.5158558 6.06572819,10.5158558 C6.02942751,10.7832413 6,11.2150574 6,11.4904785 L6,14.5095215 C6,14.7804053 5.78494263,15 5.50952148,15 L2.49047852,15 C2.21959471,15 2,14.7760437 2,14.4906552 L2,8.23608091 C2,7.68436515 2.30578971,6.91923708 2.68827629,6.5216352 L7.31172371,1.71547595 Z"
      />
    </svg>
  );
}

Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Home.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default Home;
