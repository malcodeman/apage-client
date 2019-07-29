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

export default {
  brand: "#1473e6",
  brandHover: "#2750ae",
  primary: "#3f3f3f",
  secondary: "#818181",
  backgroundPrimary: "#000000",
  backgroundSecondary: "#FFFFFF",
  backgroundInput: "#f2f2f2",
  easeIn: "0.085s all ease-in",
  error: "#f82b60",
  link: "#2680eb",
  borderColor: "#DDDDDD",
  borderWidth: "1px",
  borderRadius: "3px",
  disabled: "hsla(0,0%,0%,0.25)",
  bounceInAnimation: css`
    ${bounceIn} 240ms cubic-bezier(0.215, 0.61, 0.355, 1);
  `,
  button: {
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
      background: "#1473e6"
    },
    danger: {
      color: "hsl(0, 0%, 100%)",
      background: "#f82b60"
    }
  }
};
