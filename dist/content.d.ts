import { Component, SocialItem } from './components';
import { Result, Header, Footer } from '.';
export declare enum Theme {
    Unstyled = "UNSTYLED",
    Simple = "SIMPLE"
}
export declare class Content {
    version: number;
    theme: Theme;
    header: Component[];
    body: Component[][];
    footer: Component[];
    constructor(builder: ContentBuilder);
    static builder(): ContentBuilder;
}
declare class ContentBuilder {
    _theme: Theme;
    _header: Component[];
    _body: Component[][];
    _footer: Component[];
    constructor();
    theme(theme: Theme): this;
    header(header: Header): this;
    footer(footer: Footer): this;
    button(text: string, url: string): this;
    image(src: string, url?: string, width?: number, height?: number, alt?: string): this;
    link(text: string, url: string): this;
    otp(text: string): this;
    socials(data: SocialItem[]): this;
    text(text: string): this;
    viewInBrowser(text: string): this;
    build(): Result<Content>;
    private push;
}
export {};
