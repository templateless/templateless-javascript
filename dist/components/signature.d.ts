import { Component, ComponentId } from '../common';
export declare enum Font {
    ReenieBeanie = "REENIE_BEANIE",
    MeowScript = "MEOW_SCRIPT",
    Caveat = "CAVEAT",
    Zeyada = "ZEYADA",
    Petemoss = "PETEMOSS"
}
export declare class Signature implements Component {
    id: ComponentId;
    text: string;
    font?: Font;
    constructor(text: string, font?: Font);
}
