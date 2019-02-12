import React from 'react';
import CreateNewComment from '../components/CreateNewComment';
import { shallow, mount } from 'enzyme';
import * as api from '../api';

describe( '<CreateNewComment />', () => {

  it('renders without exploding', () => {

    const mockFunction = jest.fn();
    expect( shallow( <CreateNewComment postId="1234" author="Zac" updateComments={mockFunction}/> ).length ).toEqual(1);
  });
  it('sets the sate from textarea value', () => {

    const mockFunction = jest.fn();
    const wrapper = mount(<CreateNewComment postId="1234" author="Zac" updateComments={mockFunction}/>);

    const textArea = wrapper.find('#comment');
    textArea.simulate('change', { target: { name: 'comment', value: 'En kommentar' } });
    const comment = wrapper.find('#comment').props().value;

    expect(wrapper.state().comment).toEqual(comment);
  })
  it('stores comment to api', () => {

    const mockFunction = jest.fn();
    const wrapper = mount(<CreateNewComment postId="1234" author="Zac" updateComments={mockFunction}/>);

    const textArea = wrapper.find('#comment');
    textArea.simulate('change', { target: { name: 'comment', value: 'En kommentar' } });

    const form = wrapper.find('form');
    form.simulate('submit');

    const fetchedComments = api.fetchAllComments();

    expect(fetchedComments.length).toEqual(1);
  })

})
