import React from 'react';
import App from '../components/App';
import Button from '../components/Button';
import { shallow, mount } from 'enzyme';

describe('<Button />', () => {
  it('renders without exploding', () => {

    const mockFunction = jest.fn();
    expect( shallow( <Button onClick={mockFunction}>Talk to a real human</Button>).length ).toEqual(1);
  });
  it('changes App currentPage state when clicked', () => {

    const wrapper = mount(<App />);
    const startCurrentPage = wrapper.state().currentPage;
    const button = wrapper.find("Button");
    button.simulate('click');

    if(startCurrentPage === 'home'){
      expect(wrapper.state().currentPage).toEqual('bot')
    }
    else if(startCurrentPage === 'bot'){
      expect(wrapper.state().currentPage).toEqual('home')
    }
  });
  it('changes text when clicked', () => {

    const wrapper = mount(<App />);
    wrapper.setState({ currentPage: 'bot' });
    wrapper.update();
    const button = wrapper.find("Button");

    expect(button.props().children).toEqual('Return to forum');
  })
})
