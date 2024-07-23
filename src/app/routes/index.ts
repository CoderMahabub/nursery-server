import { Router } from 'express';
import { productRouts } from '../modules/Product/product.route';

const router = Router();
const modulesRoutes = [
  {
    path: '/products',
    route: productRouts,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
