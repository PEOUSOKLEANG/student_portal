import { Major } from "src/modules/majors/entities/major.entity";
import { Transaction } from "src/modules/transactions/entities/transaction.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'school'})
export class School {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    address:string;

    @OneToMany(()=>Major , (majors)=>majors.school)
    majors:Major[];

    @OneToMany(()=>Transaction , (transaction)=> transaction.school)
    transaction:Transaction[];

}
