import { render } from '@testing-library/react';
import React from 'react';
import Highlight from "./Highlight";

describe('Highlight component', () => {

  it('should contain the "highlight" class', () => {
    const { container } = render(<Highlight/>);
    const classList = container.firstChild.classList;
    expect(classList.contains('highlight')).toBe(true);
  });

  it('should detect the correct language', async () => {
    const js = render(<Highlight code="function test() {}"/>);
    const xml = render(<Highlight code="<strong>HTML</strong>"/>);
    const css = render(<Highlight code=".test { color: red; }"/>);
    expect(js.container.querySelector('code')).toHaveClass('javascript');
    expect(xml.container.querySelector('code')).toHaveClass('xml');
    expect(css.container.querySelector('code')).toHaveClass('css');
  });

});
