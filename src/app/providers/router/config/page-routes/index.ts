import { adminPagesUrl } from './admin/admin-routes';
import { decoratorPagesUrl } from './decorator/decorator-routes';
import { managerPagesUrl } from './manager/manager-routes';
import { publicPagesUrl } from './public/public-routes';
import { steamPagesUrl } from './steam/steam-routes';

export const pageUrl = {
  public: publicPagesUrl,
  manager: managerPagesUrl,
  decorator: decoratorPagesUrl,
  admin: adminPagesUrl,
  steam: steamPagesUrl,
};
