import { render } from '@testing-library/react';
import React from 'react';
import Highlight from "./Highlight";

describe('Highlight component', () => {

  it('should contain the "highlight" class', () => {
    const { container } = render(<Highlight code=""/>);
    const classList = container.firstChild.classList;
    expect(classList.contains('highlight')).toBe(true);
  });

});
