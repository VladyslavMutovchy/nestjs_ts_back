// admin-list/admin-list.controller.ts
import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Datum } from './admin-list-datum.model';
import { DatumSkills } from './admin-list-datum-skills.model';
import { CreateDatumDto } from './dto/create-datum.dto';
import { CreateSkillDto } from './dto/create-skill.dto';

@Controller('admin-list')
export class AdminListController {
  @ApiOperation({ summary: 'Создание персонажа' })
  @ApiResponse({ status: 201, type: Datum })
  @Post('/add')
  async create(@Body() userDto: CreateDatumDto) {
    const newDatum = await Datum.create(userDto);
    return newDatum;
  }

  @ApiOperation({ summary: 'Получение всех персонажей' })
  @ApiResponse({ status: 200, type: [Datum] })
  @Get('/getAll')
  async getAll() {
    return await Datum.findAll({ include: [DatumSkills] });
  }

  @ApiOperation({ summary: 'Получение персонажа по ID' })
  @ApiResponse({ status: 200, type: Datum })
  @Get('/get/:id')
  async getOne(@Param('id') id: number) {
    return await Datum.findByPk(id, { include: [DatumSkills] });
  }

  @ApiOperation({ summary: 'Обновление персонажа' })
  @ApiResponse({ status: 200, type: Datum })
  @Put('/update/:id')
  async update(@Param('id') id: number, @Body() userDto: CreateDatumDto) {
    await Datum.update(userDto, { where: { id } });
    return this.getOne(id); // Возвращаем обновленный объект
  }

  @ApiOperation({ summary: 'Удаление персонажа по ID' })
  @ApiResponse({ status: 204 })
  @Delete('/deleteById/:id')
  async delete(@Param('id') id: number) {
    await Datum.destroy({ where: { id } });
  }

  @ApiOperation({ summary: 'Создание скилла' })
  @ApiResponse({ status: 201, type: DatumSkills })
  @Post('/addSkill')
  async addSkill(@Body() skillDto: CreateSkillDto) {
    const newSkill = await DatumSkills.create(skillDto);
    return newSkill;
  }

  @ApiOperation({ summary: 'Получение всех скиллов' })
  @ApiResponse({ status: 200, type: [DatumSkills] })
  @Get('/getSkills')
  async getAllSkills() {
    return await DatumSkills.findAll();
  }

  @ApiOperation({ summary: 'Удаление скилла по ID' })
  @ApiResponse({ status: 204 })
  @Delete('/deleteSkillById/:id')
  async deleteSkill(@Param('id') id: number) {
    await DatumSkills.destroy({ where: { id } });
  }
}
