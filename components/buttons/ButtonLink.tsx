import React from "react";
import ButtonOrLink from "./ButtonOrLink";

export default function ButtonLink(props) {
  return (
    <ButtonOrLink
      onClick={props.onClick}
      {...props}
      role="link"
      className="cursor-pointer relative bg-[linear-gradient(#fff,#fff),linear-gradient(#F13F3F,#F13F3F)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] text-white font-semibold hover:text-primary-500 hover:no-underline"
    >
      {props.children}
    </ButtonOrLink>
  );
}
