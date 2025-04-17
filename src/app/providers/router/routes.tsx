import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout } from '@/shared/layouts/AuthLayout';
import { MainLayout } from '@/shared/layouts/MainLayout/ui/MainLayout';
import store from '@/shared/store/stores';
import { CreateAccountPage } from '@/pages/admin/create-account';
import { OrdersPage as DecoratorOrdersPage } from '@/pages/decorator/orders';
import { OrdersPage as ManagerOrdersPage } from '@/pages/manager/orders';
import { LoginPage } from '@/pages/public/auth';
import { RefillPage } from '@/pages/steam/refil';
import { pageUrl } from './config/page-routes';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // менеджер
      {
        path: pageUrl.manager.orders(),
        element: <ManagerOrdersPage />,
      },

      // оформитель
      {
        path: pageUrl.decorator.orders(),
        element: <DecoratorOrdersPage />,
      },

      // admin
      {
        path: pageUrl.admin.createAccount(),
        element: <CreateAccountPage />,
      },
      // steam
      {
        path: pageUrl.steam.refill(),
        element: <RefillPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: pageUrl.public.login(),
        element: <LoginPage />,
      },
    ],
  },
]);

export function Router() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
