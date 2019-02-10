import React from 'react';
import App from '../components/App';
import Button from '../components/Button';
import { mount } from 'enzyme';

describe('<Button />', () => {
  it('Changes state of App when clicked', () => {
    const component = mount(<App />);
    const button = component.find("button");
    const currentPage = component.state().currentPage;
    console.log(currentPage);
    button.simulate('click');
    button.simulate('click');
    console.log(component.state());
  })
})