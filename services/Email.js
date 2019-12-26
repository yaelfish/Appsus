import { getRandomId } from "./utils.js";
export default class Email {

    constructor(subject, body) {
        
        this.subject = subject;
        this.body = body;
        this.isRead = false;
        this.sentAt = Date.now();
        this.id = getRandomId();
    }
}

