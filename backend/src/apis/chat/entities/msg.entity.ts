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
import { ChatRoom } from './chatRoom.entity';


@Entity()
@ObjectType()

export class Msg {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    message: string;

    @ManyToOne(() => User)
    @Field(() => User)
    user: User;

    @ManyToOne(() => ChatRoom)
    @Field(() => ChatRoom)
    chatRoom: ChatRoom;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;
}