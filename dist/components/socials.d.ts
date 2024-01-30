import { ComponentId } from '../common';
export declare enum Service {
    Website = "WEBSITE",
    Email = "EMAIL",
    Twitter = "TWITTER",
    X = "X",
    Github = "GITHUB"
}
export declare class Item {
    service: Service;
    value: string;
    constructor(service: Service, value: string);
}
export declare class Socials implements Component {
    id: ComponentId;
    data: Item[];
    constructor(data: Item[]);
}
interface Component {
}
export {};
