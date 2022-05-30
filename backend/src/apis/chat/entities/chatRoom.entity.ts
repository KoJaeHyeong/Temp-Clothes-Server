import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';


@Entity()
@ObjectType()

export class ChatRoom {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String, { nullable: false })
    host: string

    @Column()
    @Field(() => String, { nullable: false })
    guest: string

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;


}