import { UrlBuilder } from '../../base.config';

export class SteamPagesUrl extends UrlBuilder {
  constructor() {
    super();
  }

  refill(): string {
    return this.root('/steam/refill');
  }

  test(): string {
    return this.root('/');
  }
}

export const steamPagesUrl = new SteamPagesUrl();
