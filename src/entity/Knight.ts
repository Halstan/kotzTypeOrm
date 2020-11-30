import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Armor } from './Armor';
import { Constelation } from './Constelation';
import { God } from './God';
import { Hability } from './Hability';

@Entity()
export class Knight {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 40,
        nullable: false
    })
    name: string;

    @Column()
    age: number;

    @OneToOne(() => Constelation, {
        nullable: false
    })
    @JoinColumn()
    constelation: Constelation;

    @ManyToOne(() => God, god => god.knights, {
        nullable: false
    })
    god: God;

    @ManyToMany(() => Hability, hability => hability.knight)
    @JoinTable()
    habilities: Hability[];

    @ManyToOne(() => Armor, armor => armor.knights)
    armor: Armor;

}
