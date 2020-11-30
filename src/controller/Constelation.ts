import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Constelation } from '../entity/Constelation';

export const getConstelations = async (req: Request, res: Response): Promise<Response> => {
    const constelations = await getRepository(Constelation).find();
    return res.status(200).json(constelations);
};

export const createConstelation = async (req: Request, res: Response): Promise<Response> => {
    const constelation = getRepository(Constelation).create(req.body);
    const result = await getRepository(Constelation).save(constelation);
    return res.json(result);
};

export const getConstelation = async (req: Request, res: Response): Promise<Response> => {
    const constelation = await getRepository(Constelation).findOne(req.params.id);
    return res.json(constelation);
};

export const updateConstelation = async (req: Request, res: Response): Promise<Response> => {
    const constelation = await getRepository(Constelation).findOne(req.params.id);
    if (constelation){
        getRepository(Constelation).merge(constelation, req.body);
        const result = await getRepository(Constelation).save(constelation);
        return res.json(result);
    }
    return res.status(404).json({message: 'Armor not found'});
};

export const deleteConstelation = async (req: Request, res: Response): Promise<Response> => {
    const constelation = await getRepository(Constelation).delete(req.params.id);
    return res.json(constelation);
};
