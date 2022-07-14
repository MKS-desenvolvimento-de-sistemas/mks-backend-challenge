import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('movies')
export class Movie{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column({type: 'smallint'})
  year: number;

  @Column({type: 'smallint'})
  score: number;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: string;
}