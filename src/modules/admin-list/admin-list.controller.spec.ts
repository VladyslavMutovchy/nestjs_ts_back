import { Test, TestingModule } from '@nestjs/testing';
import { AdminListController } from './admin-list.controller';

describe('AdminListController', () => {
  let controller: AdminListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminListController],
    }).compile();

    controller = module.get<AdminListController>(AdminListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
