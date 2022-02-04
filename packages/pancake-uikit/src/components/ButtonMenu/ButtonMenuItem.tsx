import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background: linear-gradient(180deg , rgb(165, 127, 57), rgb(238, 206, 111));
  color: #ffffff;
  width: 50%;
  &:hover:not(:disabled):not(:active) {
    background: rgb(154, 106, 255);
  }
`;
const StyledButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  background: rgb(190,3,253);
  align-items: center;
  padding: 8px 16px;
  width: 50%;
  text-align: center;
  border-radius: 10px;
  &:hover:not(:disabled):not(:active) {
    background: rgb(154, 106, 255); 
  }
  `
  
  // background: #e918b9;  pink
  // background: rgb(154, 106, 255); dark blue

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <StyledButton as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
