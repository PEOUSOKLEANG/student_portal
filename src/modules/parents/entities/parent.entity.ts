import { Parents_Users } from "src/modules/users/entities/parents_users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
export enum StatusMarried{
    Married = 'married',
    Not_Yet ='not_yet' 
}

export enum RoleGuardian{
    Guardian = 'guardian',
    Mother = 'mother',
    Father = 'father',
}

@Entity({name:'parents'})
export class Parent {
    @PrimaryGeneratedColumn()
    id:string;

    @Column({type:'enum' , enum:RoleGuardian , default:RoleGuardian.Guardian})
    role:string;

    @Column()
    name:string;

    @Column()
    dob:Date;

    @Column()
    nationality:string;

    @Column()
    race:string;

    @Column()
    phone_number:string;

    @Column()
    address:string;

    @Column({type:'enum',enum:StatusMarried,default:StatusMarried.Not_Yet})
    //married or not
    status:string
    
    @Column()
    career:string;

    @Column()
    workplace:string;
    
    @Column()
    alive:boolean;

    // user_id 
    //
    @OneToMany(()=>Parents_Users , (parent_user)=> parent_user.parent)
    parent_user:Parents_Users[];



}
