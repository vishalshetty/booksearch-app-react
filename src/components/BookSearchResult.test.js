import React, { Component } from "react";
import BookSearchResult from "./BookSearchResult";
import { shallow } from 'enzyme';

it('finds thumbnail', () => {
     const wrapper = shallow(<div />);
    	const thimage = wrapper.find('.imgthumb');
	console.log(thimage);

});