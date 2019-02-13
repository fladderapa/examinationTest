import React from 'react';
import App from '../components/App';
import SingleComment from '../components/SingleComment';
import { shallow, mount } from 'enzyme';

describe('<SingleComment />', () => {
  it('renders without exploding', () => {
    const mockFunction = jest.fn();
    
    expect( shallow( 
      <SingleComment 
        id='_2321' author='zac' onClick={mockFunction} currentPersona='Zac' 
        comment="En kommentar" date='2019-02-12'>
      </SingleComment>).length)
    .toEqual(1)
  });
  it('renders remove button when author and currentPersona is same', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(
      <SingleComment 
        id='_2321' author='Zac' onClick={mockFunction} currentPersona='Zac' 
        comment="En kommentar" date='2019-02-12'>
      </SingleComment>
    )
    const button = wrapper.find('Button');

    expect(button.length).toEqual(1)
  });
  it('renders remove button when author and currentPersona is same', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(
      <SingleComment 
        id='_2321' author='Zac' onClick={mockFunction} currentPersona='Esmeralda' 
        comment="En kommentar" date='2019-02-12'>
      </SingleComment>
    )
    const button = wrapper.find('Button');

    expect(button.length).toEqual(0)
  });
  it('Renders props correctly', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <SingleComment 
        id='_2321' author='Zac' onClick={mockFunction} currentPersona='Zac' 
        comment="En kommentar" date='2019-02-12'>
      </SingleComment>
    )

    const comment = wrapper.find('p').first().props().children;
    const paragraph = wrapper.find('p').last().props().children;

    expect(paragraph).toContain('Zac');
    expect(paragraph).toContain('2019-02-12');
    expect(comment).toContain(comment);
  })
})

