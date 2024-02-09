import { Attendance } from "src/modules/attendances/entities/attendance.entity";
import { StudentSubject } from "src/modules/student_subjects/entities/student_subject.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'attendance_detail'})
export class AttendanceDetail {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    classname: string; // room_name

    @Column()
    session:string;

    @Column()
    time_start:Date;

    @Column()
    time_end:Date;

    //checker_ role teacher 
    @ManyToOne(()=>User ,(user)=>user.attendance_detail)
    @JoinColumn({name:'user_id'})
    user:User;

    //student_subject
    @ManyToOne(()=>StudentSubject, (studentsubject)=>studentsubject.attendance_detail)
    @JoinColumn({name:'studentsubject_id'})
    studentsubject:StudentSubject;

    //One to One attendance to attendance_detail
    @OneToOne(()=>Attendance,(attenadance)=>attenadance.attendance_detail)
    @JoinColumn()
    attendance:Attendance;





    
    
    // 
}
