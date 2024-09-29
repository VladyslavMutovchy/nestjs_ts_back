import { Module } from '@nestjs/common';
import { AdminListController } from './admin-list.controller';
import { AdminListService } from './admin-list.service';

interface AdminListAttrs {
  age: number;
  name: string;
};


@Module({
  controllers: [AdminListController],
  providers: [AdminListService]
})
export class AdminListModule {}
