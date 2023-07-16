import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserCredentialEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    firstname: string;

    @Column({ default: '' })
    lastname: string;

    @Column({ default: '' })
    mail: string;

    @Column({ default: '' })
    password: string;

    @Column({ default: '' })
    role: string;


}