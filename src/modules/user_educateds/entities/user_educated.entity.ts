import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
export enum School_status{
    Pass='pass',
    Fail= 'fail',
    Other = 'other'
}
export enum Gender{
    Male= 'male',
    Female = 'female',
    Other = 'Other'
}
@Entity({name:'education_information'})
export class UserEducated {
    //education information
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    high_school:string;

    @Column( {type:'enum', enum:School_status})
    high_school_status:string; // pass or fail 
  
  
    @Column()
    start_year:Date;
  
    @Column()
    end_year:Date; 
  
    @Column({type:'enum',enum:Gender})
    grade:string; 
  
    @Column()
    room_number:number;
  
    @Column()
    seat_number: number;
  
    @Column()
    location:string;
  
    @Column()
    university:string;
  
    @Column()
    institute:string;
  
    //nhsd is number of highschool disploma
    @Column()
    nhsd:string;
  
    @Column()
    technical_school:string;
  
    @Column()
    other:string;


    @ManyToOne(()=>User , (user)=>user.user_educated)
    @JoinColumn({name:'user_id'})
    user:User;

}

