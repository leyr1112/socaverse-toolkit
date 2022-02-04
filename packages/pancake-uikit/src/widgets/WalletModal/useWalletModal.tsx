import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import NetworkModal from "./NetworkModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, t: (key: string) => string, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} t={t} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} t={t} />);
  return { onPresentConnectModal, onPresentAccountModal };
};

export const useNetworkModal = () => {
  const [onPresentNetworkModal] = useModal(<NetworkModal />);
  return { onPresentNetworkModal }
}


export default useWalletModal;
