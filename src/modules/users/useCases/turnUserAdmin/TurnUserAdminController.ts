import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request: Request, response: Response): Response {
        // Complete aqui
        const { id } = request.params;

        const user_id = id.toString();

        this.turnUserAdminUseCase.execute({ user_id });

        return response.status(200).send();
    }
}

export { TurnUserAdminController };
