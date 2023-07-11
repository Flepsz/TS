import {} from "express";

const users = [
    { name: "Luis", email: "lusifelp@gmail.com"}
];

export default {
    async index(req, res) {
        return res.json(users);
    }
};