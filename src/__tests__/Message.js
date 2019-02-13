import React from 'react';
import Message from '../components/Bot/Message';
import { mount } from 'enzyme';


describe( '<CreateNewPost />', () => {
  it('renders without exploding', () => {
    expect( mount( <Message bot={false} message="Ett meddelande" />).length ).toEqual(1);
  });
  it('renders props correctly', () => {
    const wrapper = mount( <Message bot={true} message="Ett meddelande" />);
    const paragraph = wrapper.find('p');

    expect(paragraph.props().children).toEqual(wrapper.props().message);
    expect(paragraph.props().className).toContain('white text-grey-darker');
  })
})
