import { Model } from "sequelize-typescript";
export declare class DatumSkills extends Model<DatumSkills> {
    id: number;
    datum_id: number;
    skill: string;
}
