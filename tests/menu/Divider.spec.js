import MenuDivider from '../../src/components/menu/MenuDivider';

import { MenuDivider as MenuDividerBase } from '../../src/components/menu/Menu.style';

const render = shallowComponent(MenuDivider);

describe('Divider', () => {
  let divider;

  beforeEach(() => {
    divider = render();
  });

  describe('refs', () => {
    it('sets a ref to the menuItem', () => {
      divider.find(MenuDividerBase).prop('innerRef')('menu divider ref');
      expect(divider.instance().menuItem).toEqual('menu divider ref');
    });
  });
});
