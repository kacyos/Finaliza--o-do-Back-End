import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);

export default routes;

/*

{
	"name": "A Minha Casa",
	"latitude": -22.902149,
	"longitude": -43.300119,
	"about": "Sobre o orfanato",
	"instructions": "Venha nos visitar",
	"opening_hours": "8h as 18h",
	"open_on_weekends": true
}

*/