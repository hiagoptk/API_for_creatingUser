import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ email, name }: IRequest): User {
        // Complete aqui
        const userExists = this.usersRepository.findByEmail(email);

        if (userExists) {
            throw new Error(
                "Email is already in use. Try a new one or log in your account."
            );
        }

        const user = this.usersRepository.create({
            email,
            name,
        });

        return user;
    }
}

export { CreateUserUseCase };
