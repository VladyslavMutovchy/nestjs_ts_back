import { Controller, Get } from "@nestjs/common"; 
import { AppService } from "./app.service";
// новые контроллеры импортируй!
//этот файл должен быть максимально худам, не содержать функций а лишь принимать и отправлять 

@Controller('/api')
export class AppController {

    constructor(private appService: AppService) {

    }

    @Get('/users')
    getUsers() {
        return this.appService.getUsers()
    }

}