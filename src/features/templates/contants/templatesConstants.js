import React from "react";
import nanoid from "nanoid";

import { ReactComponent as CardIllustration } from "../assets/illustrations/card.svg";
import { ReactComponent as ProfileIllustration } from "../assets/illustrations/profile.svg";
import { ReactComponent as FolioIllustration } from "../assets/illustrations/folio.svg";

export const CATEGORIES = [
  { id: nanoid(), text: "Featured", path: "/templates/featured" },
  { id: nanoid(), text: "Book", path: "/templates/book" },
  { id: nanoid(), text: "Newsletter", path: "/templates/newsletter" },
  { id: nanoid(), text: "Payments", path: "/templates/payments" },
  { id: nanoid(), text: "Podcast", path: "/templates/podcast" },
  { id: nanoid(), text: "Portfolio", path: "/templates/portfolio" },
  { id: nanoid(), text: "Product", path: "/templates/product" },
  { id: nanoid(), text: "Profile", path: "/templates/profile" },
  { id: nanoid(), text: "Service", path: "/templates/service" },
  { id: nanoid(), text: "Video", path: "/templates/video" }
];

const CARD_INITIAL_PROPS = {
  name: "Dua Lipa",
  tagline: "Singer",
  location: "London",
  cta_button_text: "Get in Touch",
  cta_button_link: "mailto:hi@templates.com"
};

export const PROFILE = [
  {
    id: nanoid(),
    title: "Card",
    template: "card",
    description:
      "Create a website/card for your profile and links. The perfect solution for content creators.",
    coverPhoto: <CardIllustration />,
    ...CARD_INITIAL_PROPS
  },
  {
    id: nanoid(),
    title: "Profile",
    template: "profile",
    description:
      "Create a website for your profile, text, links & newsletter... perfect for content creators.",
    coverPhoto: <ProfileIllustration />
  },
  {
    id: nanoid(),
    title: "Folio",
    template: "folio",
    description:
      "Create a website for your portfolio. Add images, descriptions & links.",
    coverPhoto: <FolioIllustration />
  }
];

export default {
  CATEGORIES
};
