import { Router } from 'express';
import { orderWithDetailRoutes } from '../modules/OrderWithCustomerDetails/orderWithDetail.route';
import { productRouts } from '../modules/Product/product.route';

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
