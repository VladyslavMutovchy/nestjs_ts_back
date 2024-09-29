import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('admin-list')
export class AdminListController {
  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: 'Hello'})
  @Post('/add')
  create(@Body() userDto: any) {
    console.log('=== THIS WORKS');
    return 'Hello';
  }
}
