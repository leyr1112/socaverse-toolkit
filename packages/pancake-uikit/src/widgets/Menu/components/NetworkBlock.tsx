import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import Flex from "../../../components/Box/Flex"
import { useNetworkModal } from "../../WalletModal/useWalletModal";
import Button from "../../../components/Button/Button";


const StyledFlex = styled(Flex)`
  .desktop-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`

const NetworkBlock: React.FC = () => {
  const { onPresentNetworkModal } = useNetworkModal();
  return (
    <div style={{marginRight: "10px"}}>
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentNetworkModal();
          }}
        >
            <StyledFlex>
                <img width="24px" src="/images/network-logo.png" alt="network-logo" style={{marginRight: "4px"}} />
                <Text className="desktop-icon" color="textSubtle">BSC</Text>
            </StyledFlex>
        </Button>
    </div>
  );
};

export default NetworkBlock