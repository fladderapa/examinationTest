import React from 'react';
import Comments from '../components/Comments';
import { shallow, mount } from 'enzyme';
import * as api from '../api';

describe('<Comments />', () => {
  it('renders without exploding', () => {
    expect( shallow( <Comments postId="_123" currentPersona="Zac"></Comments>).length ).toEqual(1);
  });
  it('renders right amount of Comments', () => {
    const post = api.createPostObject("En titel", 'lite content', 'Zac');
    api.storePostObject([post]);

    const posts = api.fetchAllPosts();
    const postId = posts[0].id;

    const wrapper = mount(<Comments postId={posts[0].id} currentPersona="Zac"></Comments>)

    const newComment = api.createCommentObject('En kommentar', {postId}, 'Zac');
    api.storeCommentObject([newComment]);

    const comments = api.fetchAllComments();
    wrapper.setState({ comments: comments });

    const numberOfSingleComments = wrapper.find('SingleComment').length;

    expect(numberOfSingleComments).toEqual(comments.length);
  });
  it('removes post when deleted', () => {
    const post = api.createPostObject("En titel", 'lite content', 'Zac');
    api.storePostObject([post]);

    const posts = api.fetchAllPosts();
    const postId = posts[0].id;

    const wrapper = mount(<Comments postId={posts[0].id} currentPersona="Zac"></Comments>)

    const newComment = api.createCommentObject('En kommentar', {postId}, 'Zac');
    const anotherComment = api.createCommentObject('En till kommentar', {postId}, 'Zac');
    api.storeCommentObject([newComment, anotherComment]);

    const comments = api.fetchAllComments();
    wrapper.setState({ comments: comments });

    const firstComment = wrapper.find('Button').first();
    firstComment.props().onClick(comments[0].id);

    const commentsAfter = api.fetchAllComments();

    expect(commentsAfter.length).toEqual(1)
  })
})
