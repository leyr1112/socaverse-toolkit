import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <image href='images/avax-logo.svg' width='16' height='16' />
    </Svg>
  );
};

export default Icon;
