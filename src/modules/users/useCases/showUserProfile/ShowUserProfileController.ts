import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        // Complete aqui

        const { id } = request.params;

        const user_id = id.toString();

        this.showUserProfileUseCase.execute({ user_id });

        return response.status(200).send();
    }
}

export { ShowUserProfileController };
