import React, { Component } from "react";
import Search from "./Search";
import { shallow } from 'enzyme';

it('finds button', ()=>{
	const component = shallow(<div />);
	const button = component.find('button');
	console.log(button);

});

  it('Search button click works', () => {
    const mockFn = jest.fn();

    const wrapper = shallow(<button className="col-md-2 btn srch-btn" onClick={mockFn} />);
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });