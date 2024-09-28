import { Injectable } from "@nestjs/common";
// делать логику тут!



@Injectable()
export class AppService {
    getUsers() {
        return[{id: 1, name: 'Flatek'}]
    }
}