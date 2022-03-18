import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const statusRouter = Router()

statusRouter.get('/status', (req: Request, res:Response, next:NextFunction) => {
    res.status(StatusCodes.OK).send({foo : 'rota separada com sucesso'});
});

export default statusRouter;