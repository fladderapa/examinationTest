import React from 'react';
import App from '../components/App';
import SinglePost from '../components/SinglePost';
import { shallow, mount } from 'enzyme';

describe('<SinglePost />', () => {
  it('renders without exploding', () => {

    const mockFunction = jest.fn();
    
    expect( shallow(
      <SinglePost 
        title='title' content='content' author='Zac' id='_2321' date='2019-02-12' 
        currentPersona='Esmeralda' onClick={mockFunction}>
      </SinglePost>).length )
    .toEqual(1)
  });
  it('renders remove button when author and currentPersona is same', () => {
      const mockFunction = jest.fn();
      const wrapper = mount(
        <SinglePost 
        title='title' content='content' author='Zac' id='_2321' date='2019-02-12' 
        currentPersona='Zac' onClick={mockFunction}>
        </SinglePost>
      )
      const button = wrapper.find('Button');

      expect(button.length).toEqual(1)
  });
  it('dosnt render button when author and currentPersona is different', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(
      <SinglePost 
        title='title' content='content' author='Zac' id='_2321' date='2019-02-12' 
        currentPersona='Esmeralda' onClick={mockFunction}>
      </SinglePost>
    )
    const button = wrapper.find('Button');

    expect(button.length).toEqual(0)
});
  it('Renders props correctly', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <SinglePost 
      title='title' content='content' author='Zac' id='_2321' date='2019-02-12' 
      currentPersona='Esmeralda' onClick={mockFunction}>
      </SinglePost>
    )

    const paragraph = wrapper.find('p')
    const comments = wrapper.find('Comments');
    const ReactMarkdown = wrapper.find('ReactMarkdown');

    expect(comments.props().postId).toEqual('_2321');
    expect(comments.props().currentPersona).toEqual('Esmeralda');
    expect(paragraph.props().children).toContain('Zac');
    expect(paragraph.props().children).toContain('2019-02-12');
    expect(ReactMarkdown.props().source).toEqual('content');
  })
})
