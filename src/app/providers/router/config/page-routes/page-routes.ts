import { UrlBuilder } from '../base.config';

class PageUrl extends UrlBuilder {
  constructor() {
    super();
  }

  // public
  login(): string {
    return this.root('/auth');
  }

  // admin
  adminCreateAccount(): string {
    return this.root('/admin/create-account');
  }

  adminTest(): string {
    return this.root('/admin/...');
  }

  // manager
  managerOrders(): string {
    return this.root('/manager/orders');
  }

  managerTest(): string {
    return this.root('/manager/....');
  }

  // decorator
  decoratorOrders(): string {
    return this.root('/decorator/orders');
  }

  decoratorTest(): string {
    return this.root('/decorator/.....');
  }

  // steam

  refill(): string {
    return this.root('/steam/refill');
  }
}

export const pageUrl = new PageUrl();
