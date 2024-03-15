import * as React from "react";
import { SVGProps } from "react";
import { colors } from "../utils/colors";

const HtmlSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={35}
    fill="none"
    viewBox="0 0 124 141.532"
    {...props}
  >
    <path
      fill={colors.marquee}
      d="M10.383 126.894 0 0l124 .255-10.979 126.639-50.553 14.638z"
    />
    <path fill={colors.marquee} d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" />
    <path
      fill="#000"
      d="m99.49 41.362 1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
    />
  </svg>
);
export default HtmlSVG;
