import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Signup {
    smsOptIn: boolean;
    cellPhone: string;
    fullName: string;
    zipCode: string;
}
export interface backendInterface {
    getAllSignups(): Promise<Array<Signup>>;
    submitSignup(fullName: string, zipCode: string, cellPhone: string, smsOptIn: boolean): Promise<void>;
}
