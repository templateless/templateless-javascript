import { EmailAddress, Result } from '.';
interface EmailOptions {
    deleteAfter?: number;
}
declare class Content {
    static builder(): Content;
}
export declare class Email {
    to: EmailAddress[];
    subject: string;
    content: Content;
    options: EmailOptions;
    constructor(builder: EmailBuilder);
    static builder(): EmailBuilder;
}
declare class EmailBuilder {
    _to: Set<EmailAddress>;
    _subject: string;
    _content: Content;
    _options: EmailOptions;
    constructor();
    to(emailAddress: EmailAddress): this;
    toMany(emailAddresses: EmailAddress[]): this;
    subject(subject: string): this;
    content(content: Content): this;
    deleteAfter(seconds: number): this;
    build(): Result<Email>;
}
export {};
