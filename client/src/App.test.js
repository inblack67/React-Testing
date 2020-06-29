import Preloader from '../components/dumb/Preloader';
import Dashboard from '../components/smart/Dashboard'
import About from '../components/dumb/About'

it('renders correctly', () => {
    const wrapper = shallow(
        <Preloader />
    )
    expect(wrapper).toMatchSnapshot();
});

it('renders correctly again', () => {
    const wrapper = render(
        <Preloader />
    )
    expect(wrapper).toMatchSnapshot();
});

it('matches correctly', () => {
    const wrapper = mount(
        <About />
    )
    const text = wrapper.find('h3').text();
    console.log(text); // About

    expect(text).toEqual('About')
});

it('called onLog() on click', () => {
    const spy = sinon.spy();

    const wrapper = mount(
        <About spyME={spy} />
    )

    wrapper.find('a').first().simulate('click');

    expect(spy.calledOnce).toBe(true);
});