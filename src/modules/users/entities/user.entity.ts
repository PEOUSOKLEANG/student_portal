import { AttendanceDetail } from "src/modules/attendance_details/entities/attendance_detail.entity";
import { Attendance } from "src/modules/attendances/entities/attendance.entity";
import { Major } from "src/modules/majors/entities/major.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, BeforeUpdate,
    JoinColumn, OneToMany,BeforeInsert, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Parents_Users } from "./parents_users.entity";
import * as bcrypt from 'bcryptjs';
import { UserEducated } from "src/modules/user_educateds/entities/user_educated.entity";


@Entity({name:'users'})
export class User extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    uuid:string;

    @Column()
    username:string;
    @Column({select:false})
    password:string;

    @Column()
    first_name: string;

    @Column()
    last_name:string;
    @Column()
    email:string;
    @Column()
    dob:Date;

    @CreateDateColumn()
    account_create:string;

    @Column()
    phone_number:string;

    @Column()
    birth_ad:string;

    @Column()
    degree:string;
    @Column()
    current_ad:string;
    
    @Column()
    shift_study: string;

    //profile_image 
    @Column({ nullable: true })
    filename: string;

    @OneToOne(()=>Major , (current_study)=>current_study.user,{cascade:true})
    @JoinColumn()
    current_study:Major;

    @OneToMany(()=>AttendanceDetail , (attendance_detail)=>attendance_detail.user)
    attendance_detail:AttendanceDetail[];


    @OneToMany(()=>Attendance , (attendance)=>attendance.user)
    // @JoinColumn({n})
    attendance:Attendance;

    @OneToMany(()=>Parents_Users,(parent_user)=>parent_user.user)
    parent_user:Parents_Users[];

    //one to many 

    @OneToMany(()=>UserEducated , user_educated=>user_educated.user)
    user_educated:UserEducated[];


    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
        this.password = await bcrypt.hash(this.password, 8);
    }
  
    
  
    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

//    @OneToOne(()=>Major)
//   @JoinColumn()
//   current_study:Major;
    

    




}
