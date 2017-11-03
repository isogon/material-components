import { ButtonChipBase } from 'chips/ButtonChip';
import { ChipContact } from 'chips';

const render = shallowComponent(ButtonChipBase, {}, 'children');

describe('<ButtonChip />', () => {
  let chip;

  beforeEach(() => {
    chip = render();
  });

  describe('by default', () => {
    it('does not render a <ChipContact>', () => {
      expect(chip.find(ChipContact)).not.toBePresent();
    });
  });

  describe('when there is a contact', () => {
    it('renders a <ChipContact>', () => {
      chip.setProps({ contact: { text: 'foo' } });

      expect(chip.find(ChipContact)).toBePresent();
    });
  });
});
