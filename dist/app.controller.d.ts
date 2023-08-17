import { AppService } from './app.service';
import { UserService } from './services/user.service';
export declare class AppController {
    private readonly appService;
    private userService;
    constructor(appService: AppService, userService: UserService);
    getHello(): Promise<import("./entities/user.entity").User[]>;
    createUser(payload: any): Promise<import("./entities/user.entity").User>;
}
