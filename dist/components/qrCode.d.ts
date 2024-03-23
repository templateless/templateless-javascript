import { Component, ComponentId } from '../common';
export declare enum Cryptocurrency {
    Bitcoin = "bitcoin",
    Ethereum = "ethereum"
}
export declare class QrCode implements Component {
    id: ComponentId;
    data: string;
    constructor(data: Uint8Array);
    static email(email: string): QrCode;
    static url(url: string): QrCode;
    static phone(phone: string): QrCode;
    static sms(text: string): QrCode;
    static coordinates(lat: number, lng: number): QrCode;
    static cryptocurrencyAddress(cryptocurrency: Cryptocurrency, address: string): QrCode;
}
