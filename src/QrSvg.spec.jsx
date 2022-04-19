import React from 'react';
import { render } from '@testing-library/react';

import QrSvg from './QrSvg';

describe('<QrSvg /> component', () => {
  it('renders svg element properly', () => {
    const { container } = render(<QrSvg value="Hello world" />);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.tagName).toBe('svg');
  });
});