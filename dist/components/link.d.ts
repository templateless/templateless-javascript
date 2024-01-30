import { ComponentId } from '../common';
export declare class Link implements Component {
    id: ComponentId;
    text: string;
    url: string;
    constructor(text: string, url: string);
}
interface Component {
}
export {};
