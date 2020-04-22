import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Textarea from "./Textarea";

describe('Textarea component', () => {

  it('should contain the "input" class', () => {
    const { container } = render(<Textarea/>);
    const classList = container.firstChild.classList;
    expect(classList.contains('input')).toBe(true);
  });

  it('should display a placeholder', () => {
    const { container } = render(<Textarea placeholder='Search'/>);
    const props = container.firstChild;
    expect(props.placeholder).toContain('Search');
  });

  it('should be disabled', () => {
    const { container } = render(<Textarea disabled={true}/>);
    expect(container.firstChild).toBeDisabled();
  });

  it('should invoke the onChange callback', () => {
    const onChange = jest.fn();
    const { container } = render(<Textarea onChange={onChange}/>);
    fireEvent.change(container.firstChild, { target: { value: "query" } });
    expect(onChange).toHaveBeenCalled();
  });

});
