import { Request, Response} from "express";
import EmailService from "../services/EmailService";

const users = [
	{ name: "Luis", email: "lusifelp@gmail.com"}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

	async create(req: Request, res: Response) {
		const emailService = new EmailService();
		
		emailService.sendMail({
			to: {
				name: "Felipe Pereira",
				email: "lusifelp@gmail.com"
			},
			message: {
				subject: "Bem vindo!",
				body: "Aprendendo TypeScript!"
			}
		});

		return res.send()
	}
};
