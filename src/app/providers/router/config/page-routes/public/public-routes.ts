import { UrlBuilder } from '../../base.config';

export class PublicPagesUrl extends UrlBuilder {
  constructor() {
    super();
  }

  login(): string {
    return this.root('/');
  }
}

export const publicPagesUrl = new PublicPagesUrl();
