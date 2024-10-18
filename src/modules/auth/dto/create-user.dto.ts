import { IsEmail, IsString, IsNotEmpty, Validate } from 'class-validator';
// import { IsEmailUnique } from '../auth.validator';

import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ example: 'polzovatel@gmail.com', description: 'почта' })
    @IsNotEmpty({ message: 'Email не может быть пустым' })
    @IsEmail({}, { message: 'Email не правильный' })
    // @Validate(IsEmailUnique)
    readonly email: string;

    
    @ApiProperty({example: 'ыдваорываршцгсыдв', description: 'пароль пользователя'})
    @IsNotEmpty({ message: 'Password не может быть пустым' })
    @IsString({ message: 'Password must be string '})
    readonly password: string;

}