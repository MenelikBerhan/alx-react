import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications> renders', () => {
  it('without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').length).toBe(3);
  });

  it('the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});
