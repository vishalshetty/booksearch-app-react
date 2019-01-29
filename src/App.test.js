import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<App />);
});

it('shows title', () => {
     const wrapper = shallow(<App />);
    const title = <h4>Search Books</h4>;
   expect(wrapper.contains(title)).toEqual(true);

});