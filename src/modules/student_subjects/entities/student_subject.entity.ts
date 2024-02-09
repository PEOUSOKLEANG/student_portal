import { AttendanceDetail } from "src/modules/attendance_details/entities/attendance_detail.entity";
import { Subject } from "src/modules/subjects/entities/subject.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
export enum StatusEnroll{
    // Late ='late',
    Complete = 'complete',
    Not_Complete = 'not_complete'
} 
@Entity({name:'student_subjects'})
export class StudentSubject {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'enum',enum :StatusEnroll})
    status:string;


    @ManyToOne(()=>Subject, (subject)=>subject.studentsubject)
    @JoinColumn({name:'subject_id'})
    subject:Subject;

    //attendance_detail
    @OneToMany(()=>AttendanceDetail, (attendance_detail)=>attendance_detail.studentsubject)
    attendance_detail:AttendanceDetail[];


}
