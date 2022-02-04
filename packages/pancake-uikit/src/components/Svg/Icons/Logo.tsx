import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 140 140" {...props}>
      {<image width="140" height="140" href="images/logo.png"/>}
    </Svg>
  );
};

export default Icon;
