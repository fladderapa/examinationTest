import React from 'react';
import PersonaSwitcher from '../components/PersonaSwitcher';
import App from '../components/App';
import { mount } from 'enzyme';

describe( '<PersonaSwitcher />', () => {

  const mockFunction = jest.fn();
  var wrapper = mount( <PersonaSwitcher changePersona={mockFunction} currentPersona="Zac"/> );
  it('renders without exploding', () => {

    expect(wrapper.length).toEqual(1);
  });
  it('renders select with correct options length', () => {

    const select = wrapper.find('select');
    expect(select.props().children).toHaveLength(3);
  });
  it('sets currentPersona prop as selected value for select', () => {

    expect(wrapper.find('select').props().value).toEqual(wrapper.find('AvatarSelector').props().currentPersona);
  });
  it('changes currentPersona prop when selected value is changes', () => {

    wrapper = mount(<App />);
    wrapper.find('select').simulate('change', {target: { value : 'Esmeralda'}});

    const currentPersonaProp = wrapper.find('AvatarSelector').props().currentPersona;
    const newSelectedValue = wrapper.find('select').props().value;

    expect(currentPersonaProp).toEqual(newSelectedValue)
  })
})