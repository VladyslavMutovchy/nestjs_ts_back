//admin-list/admin-list-datum-skills.model.ts
import { Column, Model, DataType, Table, ForeignKey } from "sequelize-typescript";
import { Datum } from "./admin-list-datum.model"; // Модель персонажа

@Table({ tableName: 'datum_skills', createdAt: false, updatedAt: false })
export class DatumSkills extends Model<DatumSkills> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  // Связь с таблицей персонажей (Datum)
  @ForeignKey(() => Datum)
  @Column({ type: DataType.INTEGER ,allowNull: false})
  datum_id: number;

  // Уникальный скилл
  @Column({ type: DataType.STRING ,allowNull: false })
  skill: string;
}
