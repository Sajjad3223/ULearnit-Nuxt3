import {BaseDto} from "~/models/baseDto";
import {BaseFilterParams} from "~/models/baseFilterParams";
import {BaseFilterResult} from "~/models/baseFilterResult";

export interface WalletDto extends BaseDto{
    userId: number;
    price: number;
    description: string;
    isFinally: boolean;
    finallyDate: string;
    type: EWalletType;
}
export enum EWalletType{
    Deposit,
    Withdraw
}

export interface WalletFilterParams extends BaseFilterParams{
    userId: number | null;
    startDate: Date | null;
    endDate: Date | null;
    walletType: EWalletType | null;
}

export interface WalletFilterResult extends BaseFilterResult<WalletDto>{
    availableWallet:number;
}