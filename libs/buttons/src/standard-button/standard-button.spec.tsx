import { render } from '@testing-library/react';

import StandardButton from './standard-button';

describe('Standard Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StandardButton label="test" />);
    expect(baseElement).toBeTruthy();
  });
});
