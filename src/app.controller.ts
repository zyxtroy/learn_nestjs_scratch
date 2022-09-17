import { Controller, Module, Get } from "@nestjs/common";


@Controller('/app') // This is a decorator, we use this to create a class as controller inside the app, this is going to handle incoming requests
export class AppController {
    // The following function handles a get request:
    @Get('/asdf')
    getRootRoute() {
        return 'hi there';
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there';
    }
}