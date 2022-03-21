import { Request, Response, NextFunction, Router } from "express";
import JWT  from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import ForbiddenError from "../models/erros/forbidden.error.model";

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req:Request, res: Response , next: NextFunction ) => {

    try {
        const user = req.user;

        if(!user){
            throw new ForbiddenError('Usuário não informado.')
        }

        const jwtPayload = { username: user.username};
        const jwtOptions = {subject: user?.uuid};
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
        
        res.status(StatusCodes.OK).json({token : jwt});


    } catch (error) {
        next(error);
    }
});

export default authorizationRoute;