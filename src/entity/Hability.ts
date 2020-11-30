import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Knight } from './Knight';

@Entity()
export class Hability{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 40,
        nullable: false
    })
    name: string;

    @ManyToMany(() => Knight, knight => knight.habilities)
    knight: Knight;

}
