import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/modules/roles/roles.service';
export declare class UsersService {
    private userRepository;
    private roleService;
    constructor(userRepository: typeof User, roleService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
}
