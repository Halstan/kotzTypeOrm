import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Knight } from './Knight';

@Entity()
export class Armor{

    @PrimaryGeneratedColumn( )
    id: number;

    @Column({
        length: 30,
        nullable: false,
        unique: true
    })
    name: string;

    @OneToMany(() => Knight, knight => knight.armor)
    knights: Knight[];

}
