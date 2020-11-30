import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Armor } from '../entity/Armor';

export const getArmors = async (req: Request, res: Response): Promise<Response> => {
    const armors = await getRepository(Armor).find();
    return res.status(200).json(armors);
};

export const createArmor = async (req: Request, res: Response): Promise<Response> => {
    const armor = getRepository(Armor).create(req.body);
    const result = await getRepository(Armor).save(armor);
    return res.json(result);
};

export const getArmor = async (req: Request, res: Response): Promise<Response> => {
    const armor = await getRepository(Armor).findOne(req.params.id);
    return res.json(armor);
};

export const updateArmor = async (req: Request, res: Response): Promise<Response> => {
    const armor = await getRepository(Armor).findOne(req.params.id);
    if (armor){
        getRepository(Armor).merge(armor, req.body);
        const result = await getRepository(Armor).save(armor);
        return res.json(result);
    }
    return res.status(404).json({message: 'Armor not found'});
};

export const deleteArmor = async (req: Request, res: Response): Promise<Response> => {
    const armor = await getRepository(Armor).delete(req.params.id);
    return res.json(armor);
};
