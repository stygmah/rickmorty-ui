import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import AliveInfo from '../src/components/AliveInfo';

describe('AliveInfo component', () => {
  it('renders the correct status based on the "status" prop', () => {
    const { getByText } = render(<AliveInfo status="Alive" />);
    expect(getByText('Alive')).toBeInTheDocument();

    const { getByText: getByText2 } = render(<AliveInfo status="Dead" />);
    expect(getByText2('Dead')).toBeInTheDocument();

    const { getByText: getByText3 } = render(<AliveInfo status="unknown" />);
    expect(getByText3('unknown')).toBeInTheDocument();
  });
});
