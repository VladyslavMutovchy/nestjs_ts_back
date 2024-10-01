import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminListController } from './admin-list.controller';
import { AdminListService } from './admin-list.service';
import { Datum } from './admin-list-datum.model';
import { DatumSkills } from './admin-list-datum-skills.model';

// Экспорт интерфейса для использования в других файлах
export interface AdminListAttrs {
  age: number;
  name: string;
}

@Module({
  imports: [
    SequelizeModule.forFeature([Datum, DatumSkills])  // Добавляем модели в модуль
  ],
  controllers: [AdminListController],
  providers: [AdminListService],
})
export class AdminListModule {}


