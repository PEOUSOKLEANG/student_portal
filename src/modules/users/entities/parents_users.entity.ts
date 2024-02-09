import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Parent } from "src/modules/parents/entities/parent.entity";

@Entity({name:'parents_users'})
export class Parents_Users{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>User,(user)=>user.parent_user)
    user:User;

    @ManyToOne(()=>Parent , (parent)=>parent.parent_user)
    parent:Parent;
}