import { UrlBuilder } from '../../base.config';

export class ManagerPagesUrl extends UrlBuilder {
  constructor() {
    super();
  }

  orders(): string {
    return this.root('/manager/orders');
  }

  test(): string {
    return this.root('/....');
  }
}

export const managerPagesUrl = new ManagerPagesUrl();
