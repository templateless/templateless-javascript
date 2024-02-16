import { ComponentId } from '../common';
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
    Telegram = "TELEGRAM"
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
