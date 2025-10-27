import dynamic from "next/dynamic";

// lib component
import Select from "antd/lib/select";
import Button from "antd/lib/button";
export { Select, Button };

import Image from "next/image";
import Link from "next/link";
export { Image, Link };

// atoms component
export { Icon } from "./atoms/Icon";
export { Header } from "./atoms/Header";
export { Stars } from "./atoms/Stars";

// page feature
export const WorkExperiences = dynamic(
  () => import("./PageFeature/WorkExperiences"),
  {
    loading: () => <p>Loading...</p>,
  }
);
export const Skills = dynamic(() => import("./PageFeature/Skills"), {
  loading: () => <p>Loading...</p>,
});
export const Educations = dynamic(() => import("./PageFeature/Educations"), {
  loading: () => <p>Loading...</p>,
});
export const AboutMe = dynamic(() => import("./PageFeature/AboutMe"), {
  loading: () => <p>Loading...</p>,
});
export const SocialMedia = dynamic(() => import("./PageFeature/SocialMedia"), {
  loading: () => <p>Loading...</p>,
});
export const Information = dynamic(() => import("./PageFeature/Information"), {
  loading: () => <p>Loading...</p>,
});
export const Summary = dynamic(() => import("./PageFeature/Summary"), {
  loading: () => <p>Loading...</p>,
});

export const SoftSkills = dynamic(() => import("./PageFeature/SoftSkills"), {
  loading: () => <p>Loading...</p>,
});

export const WhyProgramming = dynamic(
  () => import("./PageFeature/WhyProgramming"),
  {
    loading: () => <p>Loading...</p>,
  }
);
