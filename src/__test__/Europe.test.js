import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Europe from '../components/Europ';

it('It should render the component Correctly', () => {
  const element = render(
    <Router>
      <Europe />
    </Router>,
  );
  expect(element).toMatchSnapshot();
});
