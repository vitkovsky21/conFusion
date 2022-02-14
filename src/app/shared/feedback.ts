export class Feedback {
    firstname!: string;
    lastname!: string;
    telnum!: number;
    email!: string;
    agree!: boolean;
    contacttype!: string;
    messag!: string;
};

export const ContactType = ['None', 'Tel', 'Email'];