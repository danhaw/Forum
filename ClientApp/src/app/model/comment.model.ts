import { User } from "./user.model";


//TODO: replace the class name with something else later
export class CommentM {
    constructor(
        public id?: number, 
        public commentBody?: string,
        public user?: User
    ) {}
}