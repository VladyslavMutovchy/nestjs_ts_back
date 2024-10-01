//admin-list/admin-list-datum.model.js
import { Column, Model, DataType, Table, HasMany } from "sequelize-typescript";
import { DatumSkills } from "./admin-list-datum-skills.model"; // Модель для скиллов

@Table({ tableName: 'datum', createdAt: false, updatedAt: false })
export class Datum extends Model<Datum> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  age: number;

  // Один ко многим: один Datum может иметь множество скиллов
  @HasMany(() => DatumSkills)
  skills: DatumSkills[];
}
