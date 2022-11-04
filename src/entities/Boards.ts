import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './Users';

@Entity()
export class Boards {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 20 })
  title: string;

  @Column('varchar', { name: 'content', length: 200, nullable: true })
  content: string;

  @Column('varchar', { name: 'password', length: 100 })
  password: string;

  @Column('varchar', { name: 'weather', length: 10 })
  weather: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Users, (user) => user.board, {
    cascade: ['insert', 'update', 'remove', 'soft-remove'],
  })
  user: Users;
}
