import { School } from "src/modules/schools/entities/school.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'transactions'})
export class Transaction {
    @PrimaryGeneratedColumn()
    id:string;


    @Column()
    transaction_name:string;

    @Column()
    price:string;

    @Column()
    payment_date:string;

    @Column()
    transaction_id:string;
    
    @Column()
    payment_method:string;

    @Column()
    amount:string;

    @Column()
    payer:string;

    @Column()
    gate_way_transaction:string;
    //school_id
    @ManyToOne(()=>School , (school)=>school.transaction)
    @JoinColumn({name:'school_id'})
    school:School;

    //user_id

}
