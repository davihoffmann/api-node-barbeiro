import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Davi Prada Hoffmann',
    email: 'davi.hoffmann@unidavi.edu.br',
    password_hash: '4654654645',
  });

  return res.json(user);
});

export default routes;
