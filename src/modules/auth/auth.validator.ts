import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { UsersService } from '../users/users.service'; // Импортируйте сервис для работы с пользователями

@ValidatorConstraint({ async: true }) // Указываем, что валидатор асинхронный
@Injectable()
export class IsEmailUnique implements ValidatorConstraintInterface {
  constructor(
    private readonly usersService: UsersService
  ) {}

  // Метод validate будет проверять уникальность email
  async validate(email: string, args: ValidationArguments): Promise<boolean> {
    console.log('===this.usersService', this.usersService);
    // return false;
    const user = await this.usersService.getUserByEmail(email);
    return !user;
  }

  // Сообщение об ошибке, если email уже используется
  defaultMessage(args: ValidationArguments): string {
    return 'Email $value уже используется. Пожалуйста, выберите другой.';
  }
}


// export function IsEmailUnique(validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       constraints: [],
//       validator: IsEmailUniqueConstraint,
//     });
//   };
// }