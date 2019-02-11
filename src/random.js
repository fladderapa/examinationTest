// test('should get a reply from bot on submit', (done) => {
//   const wrapper = mount(<Component />);
//   const form = wrapper.find('form');
//   const input = wrapper.find('input[name="myinput"]');
  
//   const mockResponse = { message: 'foo' };
//   api.reply = jest.fn(() => Promise.resolve(mockResponse));
  
//   input.simulate('change', { target: { name: 'myinput', value: 'bar' } })
//   form.simulate('submit');

//   setImmediate(() => {
//     wrapper.update();
//     expect(wrapper.find('Responses')).toHaveLength(2);
//     done();
//   });
// });




// const fakeUpdate = jest.fn();
// const fakeComment = 'This is a comment';

// test('Write a comment', () => {
//   const { id, author } = fakePosts.data[0];
//   const wrapper = mount(
//     <CreateNewComment postId={id} author={author} updateComments={fakeUpdate} />
//   );
//   const textbox = wrapper.find('textarea');
//   textbox.simulate('change', { target: { value: fakeComment } });
// });




// wrapper.find('SinglePost').forEach(node => {
//   expect(node.prop('id')).toBe(posts[counter].id);
//   expect(node.prop('title')).toBe(posts[counter].title);
//   expect(node.prop('content')).toBe(posts[counter].content);
//   expect(node.prop('date')).toBe(posts[counter].date);
//   counter++;
// });