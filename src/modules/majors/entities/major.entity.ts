import { School } from "src/modules/schools/entities/school.entity";
import { Subject } from "src/modules/subjects/entities/subject.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'majors'})
export class Major {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @ManyToOne(()=>School, (school)=> school.majors , { onDelete: 'CASCADE' })
    @JoinColumn({name:'school_id'})
    school:School;

    @OneToMany(()=>Subject, (subject)=>subject.major)
    subject:Subject[];

    @OneToOne(()=>User , (user)=>user.current_study)
    @JoinColumn()
    user:User;


    
}
