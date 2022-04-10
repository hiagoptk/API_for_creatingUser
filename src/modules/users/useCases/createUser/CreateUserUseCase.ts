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
        const user = this.usersRepository.findByEmail(email);

        if (user) {
            throw new Error(
                "Email is already in use. Try a new one or log in your account."
            );
        }

        this.usersRepository.create({
            email,
            name,
        });

        return user;
    }
}

export { CreateUserUseCase };
