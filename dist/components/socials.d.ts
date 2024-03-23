import { Component, ComponentId } from '../common';
export declare enum Service {
    Website = "WEBSITE",
    Email = "EMAIL",
    Phone = "PHONE",
    Facebook = "FACEBOOK",
    YouTube = "YOUTUBE",
    Twitter = "TWITTER",
    X = "X",
    GitHub = "GITHUB",
    Instagram = "INSTAGRAM",
    LinkedIn = "LINKEDIN",
    Slack = "SLACK",
    Discord = "DISCORD",
    TikTok = "TIKTOK",
    Snapchat = "SNAPCHAT",
    Threads = "THREADS",
    Telegram = "TELEGRAM",
    Mastodon = "MASTODON",
    Rss = "RSS"
}
export declare class Item {
    key: Service;
    value: string;
    constructor(service: Service, value: string);
}
export declare class Socials implements Component {
    id: ComponentId;
    data: Item[];
    constructor(data: Item[]);
}
