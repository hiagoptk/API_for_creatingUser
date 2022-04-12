import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { email, name } = request.body;

        try {
            const newUser = this.createUserUseCase.execute({ name, email });
            return response.status(201).json(newUser);
        } catch (err) {
            return response.status(400).json({ message: `${err.message}` });
        }
    }
}

export { CreateUserController };
