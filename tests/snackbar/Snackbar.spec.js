import { SnackbarBase } from 'snackbar/Snackbar';
import Message from 'snackbar/Message.style';
import Action from 'snackbar/Action.style';

const render = shallowComponent(SnackbarBase, { message: 'message' });

describe('<Snackbar />', () => {
  let snackbar;

  beforeEach(() => {
    snackbar = render();
  });

  it('renders the snackbar base style', () => {
    expect(snackbar.find('div')).toBePresent();
    expect(snackbar.find('div')).toHaveProp('className');
  });

  it('renders a <Message> with [prop] message', () => {
    snackbar.setProps({ message: 'message' });
    expect(snackbar.find(Message)).toHaveInnerText('message');
  });

  it('only renders an <Action> when [prop] actionText is defined', () => {
    expect(snackbar.find(Action)).not.toBePresent();
  });

  it('renders an <Action> with [prop] actionText', () => {
    snackbar.setProps({ actionText: 'action' });
    expect(snackbar.find(Action)).toHaveInnerText('action');
  });

  it('triggers [prop] actionHander when <Action> is clicked', () => {
    const actionHandler = jest.fn();
    snackbar.setProps({ actionHandler, actionText: 'action' });

    snackbar.find(Action).simulate('click');

    expect(actionHandler).toHaveBeenCalled();
  });
});
