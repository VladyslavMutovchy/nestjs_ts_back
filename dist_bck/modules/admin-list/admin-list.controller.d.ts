import { Datum } from './admin-list-datum.model';
import { DatumSkills } from './admin-list-datum-skills.model';
import { CreateDatumDto } from './dto/create-datum.dto';
import { CreateSkillDto } from './dto/create-skill.dto';
export declare class AdminListController {
    create(userDto: CreateDatumDto): Promise<Datum>;
    getAll(): Promise<Datum[]>;
    getOne(id: number): Promise<Datum>;
    update(id: number, userDto: CreateDatumDto): Promise<Datum>;
    delete(id: number): Promise<void>;
    addSkill(skillDto: CreateSkillDto): Promise<DatumSkills>;
    updateSkill(id: number, skillDto: CreateSkillDto): Promise<DatumSkills>;
    getAllSkills(): Promise<DatumSkills[]>;
    deleteSkill(id: number): Promise<void>;
}
