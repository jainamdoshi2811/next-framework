import { Request, Response } from "express";
import User from "../models/UserModel";

const UserController = {
    getUser(req: Request, res: Response) {
        User.find({})
            .then(data => {
                res.json(data);
            });
    },
    getUserById(req: Request, res: Response) {
        User.findById(req.params.id)
            .then(data => {
                res.json(data);
            });
    },
    postUser(req: Request, res: Response) {
        User.create({ ...req.body })
            .then(data => {
                res.json(data);
            });
    },
    putUser(req: Request, res: Response) {
        User.findByIdAndUpdate(req.params.id, { ...req.body })
            .then(data => {
                res.json(data);
            });
    },
    deleteUser(req: Request, res: Response) {
        User.findByIdAndDelete(req.params.id)
            .then(data => {
                res.json(data);
            });
    }
};

export default UserController;