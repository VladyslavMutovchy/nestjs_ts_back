//users/users.model.ts
import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, DataType,Table,BelongsToMany } from "sequelize-typescript";
import { Role } from "src/modules/roles/roles.model";
import { UserRoles } from "src/modules/roles/user-roles.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}


@Table({tableName:'users'})
export class User extends Model<User,  UserCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный id'})
  @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  
  
  @ApiProperty({example: 'polzovatel@gmail.com', description: 'почта'})
  @Column({type:DataType.STRING, unique: true, allowNull: false})
  email: string;
  

  
  @ApiProperty({example: 'ыдваорываршцгсыдв', description: 'пароль пользователя'})
  @Column({type:DataType.STRING,  allowNull: false})
  password: string;
  

  
  @ApiProperty({example: 'false', description: 'Забанен ли пользователь'})
  @Column({type:DataType.BOOLEAN, defaultValue: false})
  banned: boolean; 
  

  
  @ApiProperty({example: 'использовал метод map внутри map', description: 'Причина бана'})
  @Column({type:DataType.STRING, defaultValue: null})
  banReason: string;


  @BelongsToMany(() => Role, () => UserRoles)
roles:Role[];

}