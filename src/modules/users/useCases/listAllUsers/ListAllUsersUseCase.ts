import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        // Complete aqui
        const user = this.usersRepository.findById(user_id);

        if (!user) {
            throw new Error("User does not exist.");
        }

        if (!user.admin) {
            throw new Error(
                "Your account is not able to list all users. Please, become an admin in the system."
            );
        }
        const all = this.usersRepository.list();
        return all;
    }
}

export { ListAllUsersUseCase };
