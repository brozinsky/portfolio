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
  size = "4xl",
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
    "6xl": "text-6xl font-medium",
    "5xl": "text-5xl font-medium",
    "4xl": "text-4xl font-medium",
    "3xl": "text-3xl font-medium",
    "2xl": "text-2xl font-medium",
    xl: "text-xl font-medium",
    body: "text-base",
    sm: "text-sm",
    xs: "text-xs",
  };

  const componentProps = {
    className: clsx("font-bold", colors[color], className, sizes[size]),
    ...props,
  };

  return React.createElement(Component, componentProps, children);
}
