import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Hability } from '../entity/Hability';

export const getHabilities = async (req: Request, res: Response): Promise<Response> => {
    const Habilities = await getRepository(Hability).find();
    return res.status(200).json(Habilities);
};

export const createHability = async (req: Request, res: Response): Promise<Response> => {
    const hability = getRepository(Hability).create(req.body);
    const result = await getRepository(Hability).save(hability);
    return res.json(result);
};

export const getHability = async (req: Request, res: Response): Promise<Response> => {
    const hability = await getRepository(Hability).findOne(req.params.id);
    return res.json(hability);
};

export const updateHability = async (req: Request, res: Response): Promise<Response> => {
    const hability = await getRepository(Hability).findOne(req.params.id);
    if (hability){
        getRepository(Hability).merge(hability, req.body);
        const result = await getRepository(Hability).save(hability);
        return res.json(result);
    }
    return res.status(404).json({message: 'Hability not found'});
};

export const deleteHability = async (req: Request, res: Response): Promise<Response> => {
    const hability = await getRepository(Hability).delete(req.params.id);
    return res.json(hability);
};
