import React from "react";
import nanoid from "nanoid";

import { ReactComponent as Creative } from "../styles/illustrations/creative.svg";
import { ReactComponent as Marketing } from "../styles/illustrations/marketing.svg";
import { ReactComponent as Product } from "../styles/illustrations/product.svg";
import { ReactComponent as Project } from "../styles/illustrations/project.svg";

export const INSPIRATIONS = [
  {
    id: nanoid(),
    text: "Creative teams and agencies",
    cover: <Creative />
  },
  {
    id: nanoid(),
    text: "Marketing and communications",
    cover: <Marketing />
  },
  {
    id: nanoid(),
    text: "Product and user experience",
    cover: <Product />
  },
  {
    id: nanoid(),
    text: "Project management",
    cover: <Project />
  }
];
