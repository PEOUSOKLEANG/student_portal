import { Major } from "src/modules/majors/entities/major.entity";
import { StudentSubject } from "src/modules/student_subjects/entities/student_subject.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'subject'})
export class Subject {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;


    @ManyToOne(()=>Major , (majors)=>majors.subject)
    @JoinColumn({name:'major_id'})
    major:Major;

    @OneToMany(()=>StudentSubject , (studentsubject)=>studentsubject.subject)
    studentsubject:StudentSubject[];
}
