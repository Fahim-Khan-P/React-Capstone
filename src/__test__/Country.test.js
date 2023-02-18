import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Country from '../components/Country';

it('It should render the component Correctly', () => {
  const header = render(
    <Router>
      <Country />
    </Router>,
  );
  expect(header).toMatchSnapshot();
});
