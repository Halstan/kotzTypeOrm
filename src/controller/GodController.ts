import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { God } from '../entity/God';

export const getGods = async (req: Request, res: Response): Promise<Response> => {
    const gods = await getRepository(God).find();
    return res.json(gods);
};

export const createGod = async (req: Request, res: Response): Promise<Response> => {
    const god = getRepository(God).create(req.body);
    const result = await getRepository(God).save(god);
    return res.json(result);
};

export const getGod = async (req: Request, res: Response): Promise<Response> => {
    const god = await getRepository(God).findOne(req.params.id);
    return res.json(god);
};

export const updateGod = async (req: Request, res: Response): Promise<Response> => {
    const god = await getRepository(God).findOne(req.params.id);
    if (god){
        getRepository(God).merge(god, req.body);
        const result = await getRepository(God).save(god);
        return res.json(result);
    }
    return res.status(404).json({message: 'God not found'});
};

export const deleteGod = async (req: Request, res: Response): Promise<Response> => {
    const god = await getRepository(God).delete(req.params.id);
    return res.json(god);
};
