import React from 'react';
import Bot from '../components/Bot/Bot';
import { mount } from 'enzyme';

describe( '<Bot />', () => { 
  it('renders without exploding', () => {
    expect( mount( <Bot />).length ).toEqual(1);
  });
  it('saves message to array messages state on submit', () => {
    const wrapper = mount( <Bot />);

    const input = wrapper.find('input').first();
    input.simulate('change', { target: { name: 'userMessage', value: 'En mening till botten' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    expect(wrapper.state().messages.length).toEqual(1);
  });
  it('renders right amount of messages', () => {
    const wrapper = mount( <Bot />);

    const input = wrapper.find('input').first();
    input.simulate('change', { target: { name: 'userMessage', value: 'En mening till botten' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    const messages = wrapper.find('Message');
    expect(wrapper.state().messages.length).toEqual(messages.length);
  })
})
