import { TiendaDiscosPage } from './app.po';

describe('tienda-discos App', () => {
  let page: TiendaDiscosPage;

  beforeEach(() => {
    page = new TiendaDiscosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
