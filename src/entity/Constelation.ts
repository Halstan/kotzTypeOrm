import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Constelation{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 40,
        nullable: false,
        unique: true
    })
    name: string;

}
