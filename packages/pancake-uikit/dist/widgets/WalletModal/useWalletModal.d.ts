import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, t: (key: string) => string, account?: string | undefined) => ReturnType;
export declare const useNetworkModal: () => {
    onPresentNetworkModal: import("../Modal/types").Handler;
};
export default useWalletModal;
