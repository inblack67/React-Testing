import Images from '../components/Images'
import unsplash from '../components/services/unsplash'

jest.mock('../components/services/unsplash.js')

it('fetches unsplash images and renders them on mount', (done) => {
    const wrapper = shallow(<Images />);
    const res = wrapper.find('ImageItem').length
    
    setTimeout(() => {
        wrapper.update();
        expect(length).toEqual(5);   
        done();
    });
})