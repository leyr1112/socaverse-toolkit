import React from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import Grid from "../../components/Box/Grid";
import { Link } from "../../components/Link";
import { Modal } from "../Modal";

interface Props {
  onDismiss?: () => void;
}

const StyledLink = styled(Link)`
  display: block;
  align-items: center;
  padding: 24px 0px;
  margin: 10px;
  border-radius: 12px;
  &:hover {
    background-color: ${({theme}) => theme.colors.tertiary};
  }
`;
const AccountModal: React.FC<Props> = ({ onDismiss = () => null }) => (
  <Modal title="Change Network" onDismiss={onDismiss}>
    <Grid gridTemplateColumns="1fr 1fr" style={{textAlign: "center"}}>
        <StyledLink as="a" href="https://avax.dexyswap.com/" aria-label="avax defi" style={{border: "2px solid #e84142"}}>
            <img width="56px" src="/images/avax-logo.png"  alt="avax network-logo" />
            <Text>Avalanche</Text>
        </StyledLink>
        <StyledLink as="a" href="https://app.dexyswap.com/" aria-label="bsc defi" style={{border: "2px solid rgb(243, 186, 47)"}}>
            <img width="56px" src="/images/bsc-logo.png" alt="bsc network-logo" />
            <Text>BSC</Text>
        </StyledLink>
    </Grid>
  </Modal>
);

export default AccountModal;
