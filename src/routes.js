// importando apenas a parte de roteamento
import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';
import UsersController from './app/controllers/UsersController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/* rota para cadastro da sessão */
routes.post('/sessions', SessionController.store);

/* rota para cadastro de usuarios */
routes.post('/users', UsersController.store);

// Rota para autenticacao do usuario - Se a middleware retornar false, nada daqui para baixo será executado
routes.use(authMiddleware);

/* rota para cadastro do destinatario */
routes.post('/recipients', RecipientsController.store);

/* rota para atualizacao do destinatario */
routes.put('/recipients', RecipientsController.update);

export default routes;
