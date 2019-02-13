import React from 'react';
import MessageForm from '../components/Bot/MessageForm';
import { mount } from 'enzyme';

describe( '<CreateNewPost />', () => {
  it('renders without exploding', () => {
    const mockFunction = jest.fn();
    expect( mount( <MessageForm onSubmit={mockFunction} />).length ).toEqual(1);
  });
  it('changes the state on input change', () => {
    const mockFunction = jest.fn();
    const wrapper = mount( <MessageForm onSubmit={mockFunction} />);

    const input = wrapper.find('input').first();
    input.simulate('change', { target: { name: 'userMessage', value: 'En mening till botten' } });

    expect(wrapper.state().userMessage).toEqual('En mening till botten');
  });
  it('cleares the state on submit', () => {
    const mockFunction = jest.fn();
    const wrapper = mount( <MessageForm onSubmit={mockFunction} />);

    const input = wrapper.find('input').first();
    input.simulate('change', { target: { name: 'userMessage', value: 'En mening till botten' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(wrapper.state().userMessage).toEqual('');
  })
})