import { ComponentId } from '../common';
export declare class Text implements Component {
    id: ComponentId;
    text: string;
    constructor(text: string);
}
interface Component {
}
export {};
