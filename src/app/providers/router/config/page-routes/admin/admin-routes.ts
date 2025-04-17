import { UrlBuilder } from '../../base.config';

export class AdminPagesUrl extends UrlBuilder {
  constructor() {
    super();
  }

  createAccount(): string {
    return this.root('/create-account');
  }
}

export const adminPagesUrl = new AdminPagesUrl();
