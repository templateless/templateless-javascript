import { Component, SocialItem, StoreBadgeItem, SignatureFont } from './components';
export declare class Collection {
    components: Component[];
    constructor(builder: CollectionBuilder);
    static builder(): CollectionBuilder;
}
declare class CollectionBuilder {
    _components: Component[];
    constructor();
    button(text: string, url: string): this;
    image(src: string, url?: string, width?: number, height?: number, alt?: string): this;
    link(text: string, url: string): this;
    otp(text: string): this;
    socials(data: SocialItem[]): this;
    text(text: string): this;
    viewInBrowser(text?: string): this;
    qrCode(url: string): this;
    storeBadges(data: StoreBadgeItem[]): this;
    signature(text: string, font?: SignatureFont): this;
    component(c: Component): this;
    build(): Collection;
    private push;
}
export {};
