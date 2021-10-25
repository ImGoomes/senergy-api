import { User } from "src/user/entities/user.entity"

export class UserData {

    dataUser: User[] = [
        {
            id: 1,
            name: "Gabriel Gomes",
            email: "ggomes@senergy.com",
            password: "12345678",
            mobile: "(11)97265-8873",
            cpf: "745.887.365-94",
            location: "São Paulo - Brasil"
        },
        {
            id: 2,
            name: "Victor Nassif",
            email: "vnassif@senergy.com",
            password: "12345678",
            mobile: "(11)99873-3354",
            cpf: "223.521.789-11",
            location: "São Paulo - Brasil"
        }
    ]
}