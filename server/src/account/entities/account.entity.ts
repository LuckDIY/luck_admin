import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('account')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'name' })
  name: string;

  @Column({ type: 'varchar', length: 255, name: 'avatar' })
  avatar: string;

  @Column({ type: 'int', name: 'user_id', update: false })
  userId: string;

  @Column({ type: 'varchar', length: 255, name: 'password' })
  password: string;

  @Column({ type: 'varchar', length: 255, name: 'address' })
  address?: string;

  @Column({ type: 'varchar', length: 255, name: 'signature', nullable: true })
  signature?: string;

  @Column({ type: 'varchar', length: 255, name: 'phone' })
  phone: string;
}
