import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Datum } from './admin-list-datum.model';
import { AdminListAttrs } from './admin-list.module';

@Injectable()
export class AdminListService {
  constructor(
    @InjectModel(Datum)
    private datumModel: typeof Datum,
  ) {}

  async createPerson(attrs: AdminListAttrs): Promise<Datum> {
    return this.datumModel.create(attrs);
  }

  // Другие методы...
}
