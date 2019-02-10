import React from 'react';
import AvatarSelector from '../components/AvatarSelector';
import { mount } from 'enzyme';

describe( '<AvatarSelector />', () => {
  const component = mount(<AvatarSelector currentPersona='zac'/>);

  it('renders 1 <AvatarSelector /> component', () => {
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    expect(component.props().currentPersona).toEqual('zac');
  })
  it('sets img source correctly', () => {
    expect(component.find("img").prop("src")).toContain(component.props().currentPersona);
  })

})


