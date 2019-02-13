import React from 'react';
import Posts from '../components/Posts';
import { shallow, mount } from 'enzyme';
import * as api from '../api';

describe('<Posts />', () => {
  it('renders without exploding', () => {
    expect( shallow( <Posts currentPersona="Zac"></Posts>).length ).toEqual(1);
  });
  it('renders right amount of posts', () => {
    const wrapper = mount(<Posts currentPersona="Zac"/>);

    const post = api.createPostObject("En titel", 'lite content', 'Zac');
    const post2 = api.createPostObject("En annan titel", 'lite annan content', 'Zac');
    api.storePostObject([post, post2]);

    const posts = api.fetchAllPosts();
    wrapper.setState({ posts: posts });

    const singlePostComponents = wrapper.find('SinglePost').length;
    const postsInState = wrapper.state().posts.length;

    expect(singlePostComponents).toEqual(postsInState);
  });
  it('removes post when deleted', () => {
    const wrapper = mount(<Posts currentPersona="Zac"/>);

    const post = api.createPostObject("En titel", 'lite content', 'Zac');
    const post2 = api.createPostObject("En annan titel", 'lite annan content', 'Zac');
    api.storePostObject([post, post2]);

    const posts = api.fetchAllPosts();
    wrapper.setState({ posts: posts });

    const firstPost = wrapper.find('Button').first();
    firstPost.props().onClick(posts[0].id);

    const postsAfter = api.fetchAllPosts();

    expect(postsAfter.length).toEqual(1)
  })
})
