import { Component, ComponentId } from '../common';
export declare enum StoreBadge {
    AppStore = "APP_STORE",
    GooglePlay = "GOOGLE_PLAY",
    MicrosoftStore = "MICROSOFT_STORE"
}
export declare class Item {
    key: StoreBadge;
    value: string;
    constructor(key: StoreBadge, value: string);
}
export declare class StoreBadges implements Component {
    id: ComponentId;
    data: Item[];
    constructor(data: Item[]);
}
