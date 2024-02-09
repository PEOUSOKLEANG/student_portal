import { AttendanceDetail } from "src/modules/attendance_details/entities/attendance_detail.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
export enum StatusEnroll{

}
@Entity({name:'attendances'})
export class Attendance {
    @PrimaryGeneratedColumn()
    id:number;

    
    @Column()
    reason:string ;

    @Column()
    noted:string;

    @Column()
    status:string;

    // student
    @ManyToOne(()=>User,(user)=>user.attendance)
    @JoinColumn({name:'user_id'})
    user:User;
    // attendance_detail_id
    @OneToOne(()=>AttendanceDetail,(attendance_detail)=>attendance_detail.attendance)
    @JoinColumn()
    attendance_detail:Attendance;
}
