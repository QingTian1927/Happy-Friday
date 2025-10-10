export interface CreateEventRequest{
    title: string;
    content: string;
    startDate: Date;
    endDate: Date;
    creatorId: string;
    invitees: string[]; // array of user ids
}



export interface UpdateEventRequest{
    title?: string;
    content?: string;
    startDate?: Date;
    endDate?: Date;
    invitees?: string[];
}