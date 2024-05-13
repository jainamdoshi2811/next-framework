import { Request, Response } from "express";
import User from "../models/UserModel";

const UserController = {
    async getUser(req: Request, res: Response) {
        await User.find({})
            .then(data => {
                res.json(data);
            });
    },
    async getUserById(req: Request, res: Response) {
        await User.findById(req.params.id)
            .then(data => {
                res.json(data);
            });
    },
    async postUser(req: Request, res: Response) {
        await User.create({ ...req.body })
            .then(data => {
                res.json(data);
            });
    },
    async putUser(req: Request, res: Response) {
        await User.findByIdAndUpdate(req.params.id, { ...req.body })
            .then(data => {
                res.json(data);
            });
    },
    async deleteUser(req: Request, res: Response) {
        await User.findByIdAndDelete(req.params.id)
            .then(data => {
                res.json(data);
            });
    }
};

export default UserController;