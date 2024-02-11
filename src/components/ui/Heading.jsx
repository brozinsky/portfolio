import clsx from "clsx";
import React from "react";

const typographyVariants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body1: "p",
};

export default function Heading({
  variant,
  size = "h2",
  children,
  className = "m-0 p-0",
  color = "primary",
  ...props
}) {
  const Component = variant ? typographyVariants[variant] : "h2";

  const colors = {
    "primary": "text-primary-500",
    "light": "text-neutral-200",
  };

  const sizes = {
    "h1": "text-6xl font-normal",
    "h2": "text-[1.75rem] md:text-[2.5rem] font-normal",
    "h3": "text-4xl font-normal",
    "h4": "text-3xl font-normal",
    "h5": "text-2xl font-normal",
    h6: "text-xl font-normal",
    body: "text-base",
    sm: "text-sm",
    xs: "text-xs",
  };

  const componentProps = {
    className: clsx("text-center md:text-left",colors[color], className, sizes[size]),
    ...props,
  };

  return React.createElement(Component, componentProps, children);
}
