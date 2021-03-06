import React from "react";
import nanoid from "nanoid";

import Creative from "../styles/illustrations/Creative";
import Marketing from "../styles/illustrations/Marketing";
import Product from "../styles/illustrations/Product";
import Project from "../styles/illustrations/Project";

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
