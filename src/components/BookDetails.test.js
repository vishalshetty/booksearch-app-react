import React, { Component } from "react";
import BookDetails from "./BookDetails";
import { shallow } from 'enzyme';

it('back button click works', () => {
   const mockFn = jest.fn();
    const wrapper = shallow(<button className="btn book" onClick={mockFn} />);
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
});