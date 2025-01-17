import {Router, Request, Response} from 'express';

import Projects from '../models/projectSchema';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const projects = await Projects.find({}).exec();
        res.send(projects);
    } catch(error: any){
        console.error(error);
        res.status(500).send("Failed to fetch projects!");
    }
})

router.get('/:filter', async (req: Request, res: Response) => {
    const filter: string = req.params.filter;

    try {
        const projects = await Projects.find({ category: filter }).exec();
        res.send(projects);
    } catch(error: any){
        console.error(error);
        res.status(500).send("Failed to fetch projects!");
    }
})


export default router;