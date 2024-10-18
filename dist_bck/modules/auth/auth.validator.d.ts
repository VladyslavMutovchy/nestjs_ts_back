import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { UsersService } from '../users/users.service';
export declare class IsEmailUnique implements ValidatorConstraintInterface {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(email: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
