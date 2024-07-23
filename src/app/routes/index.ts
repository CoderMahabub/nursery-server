import { Router } from 'express';

const router = Router();
const modulesRoutes = [
  {
    path: '/products',
    route: productRouts,
  },
  {
    path: '/orders',
    route: orderWithDetailRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
