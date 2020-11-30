import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Knight } from '../entity/Knight';

export const getKnights = async (req: Request, res: Response): Promise<Response> => {
    const knights = await getRepository(Knight).find({relations: ['habilities', 'constelation', 'god', 'armor']});
    return res.status(200).json(knights);
};

export const createKnight = async (req: Request, res: Response): Promise<Response> => {
    const knight = getRepository(Knight).create(req.body);
    const result = await getRepository(Knight).save(knight);
    return res.json(result);
};

export const getKnight = async (req: Request, res: Response): Promise<Response> => {
    const knight = await getRepository(Knight).findOne(req.params.id);
    return res.json(knight);
};

export const updateKnight = async (req: Request, res: Response): Promise<Response> => {
    const knight = await getRepository(Knight).findOne(req.params.id);
    if (knight){
        getRepository(Knight).merge(knight, req.body);
        const result = await getRepository(Knight).save(knight);
        return res.json(result);
    }
    return res.status(404).json({message: 'Knight not found'});
};

export const deleteKnight = async (req: Request, res: Response): Promise<Response> => {
    const knight = await getRepository(Knight).delete(req.params.id);
    return res.json(knight);
};
