import { Component, ComponentId } from '../common';
export declare class Button implements Component {
    id: ComponentId;
    text: string;
    url: string;
    constructor(text: string, url: string);
}
