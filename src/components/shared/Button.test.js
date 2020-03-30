import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button component', () => {

  it('should contain the "button" class', () => {
    const { container } = render(<Button/>);
    const classList = container.firstChild.classList;
    expect(classList.contains('btn')).toBe(true);
  });

  it('should have the correct default type', () => {
    const { container } = render(<Button/>);
    expect(container.firstChild).toHaveAttribute('type', 'button');
  });

  it('should have the correct type', () => {
    const { container } = render(<Button type="submit"/>);
    expect(container.firstChild).toHaveAttribute('type', 'submit');
  });

  it('should display a label', () => {
    const { getByText } = render(<Button>Label</Button>);
    const label = getByText(/Label/i);
    expect(label).toBeInTheDocument();
  });

  it('should be disabled', () => {
    const { container } = render(<Button disabled={true}/>);
    expect(container.firstChild).toBeDisabled();
  });

  it('should invoke the onClick callback', () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick}>Label</Button>);
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalled();
  });

});
