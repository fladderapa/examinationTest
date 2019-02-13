import React from 'react';
import AvatarSelector from '../components/AvatarSelector';
import { shallow, mount } from 'enzyme';

describe( '<AvatarSelector />', () => { 
  const wrapper = mount(<AvatarSelector currentPersona='zac'/>);

  it('renders without exploding', () => {
    expect( shallow( <AvatarSelector currentPersona='zac'/> ).length ).toEqual(1);
  });
  it('renders props correctly', () => {
    expect(wrapper.props().currentPersona).toEqual('zac');
  })
  it('sets img source correctly', () => {
    expect(wrapper.find("img").prop("src")).toContain(wrapper.props().currentPersona);
  })

})


