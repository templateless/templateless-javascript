import { Email, ObjectId } from '.';
export interface EmailResponse {
    emails: ObjectId[];
}
export declare class Templateless {
    private _apiKey;
    private _domain;
    constructor(apiKey: string);
    domain(domain: string): this;
    send(email: Email): Promise<ObjectId[]>;
    sendMany(emails: Email[]): Promise<ObjectId[]>;
}
