import { ComponentId } from '../common';
export declare class Image implements Component {
    id: ComponentId;
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    url?: string;
    constructor(src: string, alt?: string, width?: number, height?: number, url?: string);
}
interface Component {
}
export {};
