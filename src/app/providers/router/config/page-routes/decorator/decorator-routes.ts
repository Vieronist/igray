import { UrlBuilder } from '../../base.config';

export class DecoratorPagesUrl extends UrlBuilder {
  constructor() {
    super();
  }

  orders(): string {
    return this.root('/decorator/orders');
  }

  test(): string {
    return this.root('/');
  }
}

export const decoratorPagesUrl = new DecoratorPagesUrl();
