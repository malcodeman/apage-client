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

export const FOOTER_LINKS = [
  [
    {
      id: nanoid(),
      text: "Product",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Inspiration",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Blocks",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Templates",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Universe",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Pricing",
      path: "/"
    }
  ],
  [
    {
      id: nanoid(),
      text: "Events",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Case studies",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Security",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Enterprise",
      path: "/"
    },
    {
      id: nanoid(),
      text: "API",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Integrations",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Download apps",
      path: "/"
    }
  ],
  [
    {
      id: nanoid(),
      text: "About",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Jobs",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Blog",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Creators magazine",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Contact sales",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Press",
      path: "/"
    },
    {
      id: nanoid(),
      text: "Twitter",
      path: "/"
    }
  ]
];
