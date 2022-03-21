// get /users
// get /users/:uuid
// post /user
// put /user/:uuid
// delete user/:uuid

import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from "http-status-codes";
import DatabaseError from "../models/erros/database.error.model";
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next:NextFunction)=> {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', async( req: Request <{uuid: string}>, res: Response, next:NextFunction)=> {
    
    try{
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid)
        res.status(StatusCodes.OK).send(user);
    }catch(error){
        next(error);
        }    
});

usersRoute.post('/users', async(req : Request, res : Response, netx: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);

    res.status(StatusCodes.CREATED).send(uuid);
});

usersRoute.put('/users/:uuid', async (req: Request <{uuid: string}>, res: Response, next : NextFunction) => {
    const uuid = req.params.uuid
    const modifedUser = req.body

    modifedUser.uuid = uuid

    await userRepository.update(modifedUser)

    res.status(StatusCodes.OK).send();
});

usersRoute.delete('/users/:uuid', async (req: Request, res: Response, next : NextFunction) => {
    
    const userRemoved = req.params.uuid;

    await userRepository.remove(userRemoved)
    
    res.sendStatus(StatusCodes.OK);
});



export default usersRoute;



