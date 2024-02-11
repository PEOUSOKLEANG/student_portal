
export enum StudentSUbject{
    Complete ='complete',
    Not_Complete='not_complete',
    IsGoing = 'is_going'
 
}
export class StudentSubjectDto {
    enrollment_date:Date;
    subject:any;
    user:any;
    status:StudentSUbject;
}
