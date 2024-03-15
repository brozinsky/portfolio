import Link from "next/link";
import React from "react";

const ButtonOrLink = ({ href, ...props }) => {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = isLink ? "span" : "button";

  let content = <ButtonOrLink {...props} />;

  if (isLink) {
    return (
      <Link
        className="hover:no-underline"
        href={href}
        target="_blank"
        rel="nofollow"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default ButtonOrLink;
