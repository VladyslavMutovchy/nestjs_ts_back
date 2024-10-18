import { Model } from "sequelize-typescript";
import { DatumSkills } from "./admin-list-datum-skills.model";
export declare class Datum extends Model<Datum> {
    id: number;
    name: string;
    age: number;
    skills: DatumSkills[];
}
