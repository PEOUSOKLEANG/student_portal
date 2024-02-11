import { AttendanceDetail } from "src/modules/attendance_details/entities/attendance_detail.entity";
import { Subject } from "src/modules/subjects/entities/subject.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
export enum StatusEnroll{
    // Late ='late',
    Complete = 'complete',
    Not_Complete = 'not_complete',
    IsGoing = 'is_going'
} 
@Entity({name:'student_subjects'})
export class StudentSubject {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    enrollment_date:Date;

    @Column({type:'enum',enum :StatusEnroll , default:StatusEnroll.IsGoing})
    status:string;

    @ManyToOne(()=> User, (user)=>user.studentsubject)
    @JoinColumn({name:'user_id'})
    user:User;


    @ManyToOne(()=>Subject, (subject)=>subject.studentsubject)
    @JoinColumn({name:'subject_id'})
    subject:Subject;

    //attendance_detail
    @OneToMany(()=>AttendanceDetail, (attendance_detail)=>attendance_detail.studentsubject)
    attendance_detail:AttendanceDetail[];


}
