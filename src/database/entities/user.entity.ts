import { Column, Entity, PrimaryGeneratedColumn, VirtualColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'text', nullable: true })
  firstName: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text')
  lastName: string;

  @Column('boolean', { default: true })
  isActive: boolean;

  // @Column()
  // bio: string;

  // @VirtualColumn({
  //   query: () => 'SELECT CONCAT(firstName, lastName) FROM users WHERE id=id',
  // })
  // fullName: string;
}
