import React from 'react';
import CreateNewPost from '../components/CreateNewPost';
import { shallow, mount } from 'enzyme';
import * as api from '../api';

describe( '<CreateNewPost />', () => {

  it('renders without exploding', () => {

    const mockFunction = jest.fn();
    expect( shallow( <CreateNewPost updatePosts={mockFunction} author="Zac"/> ).length ).toEqual(1);
  });
  it('sets the state by input and textarea value', () => {

    const mockFunction = jest.fn();
    const wrapper = mount(<CreateNewPost updatePosts={mockFunction} author="Zac"/>);

    const input= wrapper.find('#title');
    input.simulate('change', { target: { name: 'title', value: 'En titel..' } });
    const inputValue = wrapper.find('#title').props().value;

    const textArea =  wrapper.find('#content');
    textArea.simulate('change', { target: { name: 'content', value: 'Och en massa content' } });
    const textAreaValue = wrapper.find('#content').props().value;

    expect(inputValue).toEqual(wrapper.state().title);
    expect(textAreaValue).toEqual(wrapper.state().content);

  })

})