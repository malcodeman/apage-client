import { keyframes, css } from "styled-components";

const bounceIn = keyframes`
  0% {
    opacity: 0.9;
    transform: scale3d(.98, .98, .98);
  }
  70% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const loading = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const brand = "#1473e6";
const secondary = "#818181";
const error = "#f82b60";
const warning = "#ffd60a";

const button = {
  disabled: {
    color: "rgba(0, 0, 0, 0.247)",
    background: "hsla(0, 0%, 0%, 0.25)"
  },
  default: {
    color: "hsl(0, 0%, 20%)",
    background: "hsla(0, 0%, 0%, 0.05)"
  },
  primary: {
    color: "hsl(0, 0%, 100%)",
    background: brand
  },
  danger: {
    color: "hsl(0, 0%, 100%)",
    background: error
  },
  link: {
    color: brand,
    background: "transparent"
  }
};

const form = {
  success: {
    color: secondary
  },
  warning: {
    color: warning
  },
  error: {
    color: error
  },
  validating: {
    color: secondary
  }
};

const animations = {
  bounceIn: css`
    ${bounceIn} 240ms cubic-bezier(0.215, 0.61, 0.355, 1);
  `,
  loading: css`
    ${loading} 1.4s ease infinite;
  `
};

const transitions = {
  easeIn: "0.085s all ease-in",
  resize:
    "width 0.3s cubic-bezier(0.84, 0.02, 0.37, 0.74), height 0.3s cubic-bezier(0.84, 0.02, 0.37, 0.74);"
};

const alert = {
  success: "#30d158",
  info: "#0a84ff",
  warning,
  error
};

const text = {
  secondary,
  warning,
  danger: error
};

export default {
  button,
  form,
  animations,
  transitions,
  alert,
  text,
  brand,
  secondary,
  error,
  brandHover: "#2750ae",
  primary: "#3f3f3f",
  backgroundSecondary: "#FFFFFF",
  backgroundInput: "#f2f2f2",
  borderColor: "#DDDDDD",
  borderRadius: "3px"
};
