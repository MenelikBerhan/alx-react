import { shallow } from 'enzyme';
import App, { Header, Body, Footer } from './App';

describe('<APP>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a header with the class App-header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('header.App-header')).toBe(true);
  });

  it('renders a dev with the class App-body', () => {
    const wrapper = shallow(<Body />);
    expect(wrapper.exists('div.App-body')).toBe(true);
  });

  it('renders a footer with the class App-footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists('footer.App-footer')).toBe(true);
  });
});
