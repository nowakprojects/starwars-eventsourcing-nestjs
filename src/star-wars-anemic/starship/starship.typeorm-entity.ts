import {Fraction} from '../../star-wars-event-sourcing/write/sharedkernel/domain/fraction.enum';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'anemic_starship'})
export class Starship {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    fraction: Fraction;

    @Column({nullable: true})
    condition?: number;

    @Column()
    inBattle: boolean = false;
}
