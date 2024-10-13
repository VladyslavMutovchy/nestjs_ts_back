import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'polzovatel@gmail.com', description: 'почта'})
    readonly email: string;

    
    @ApiProperty({example: 'ыдваорываршцгсыдв', description: 'пароль пользователя'})
    readonly password: string;

}