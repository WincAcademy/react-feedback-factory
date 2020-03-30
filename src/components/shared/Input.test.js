import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Input from './Input';

describe('Input component', () => {

  it('should contain the "input" class', () => {
    const { container } = render(<Input/>);
    const classList = container.firstChild.classList;
    expect(classList.contains('input')).toBe(true);
  });

  it('should have the correct default type', () => {
    const { container } = render(<Input/>);
    expect(container.firstChild).toHaveAttribute('type', 'text');
  });

  it('should have the correct type', () => {
    const { container } = render(<Input type="search"/>);
    expect(container.firstChild).toHaveAttribute('type', 'search');
  });

  it('should display a placeholder', () => {
    const { container } = render(<Input placeholder='Search'/>);
    const props = container.firstChild;
    expect(props.placeholder).toContain('Search');
  });

  it('should be disabled', () => {
    const { container } = render(<Input disabled={true}/>);
    expect(container.firstChild).toBeDisabled();
  });

  it('should invoke the onChange callback', () => {
    const onChange = jest.fn();
    const { container } = render(<Input onChange={onChange}/>);
    fireEvent.change(container.firstChild, { target: { value: "query" } });
    expect(onChange).toHaveBeenCalled();
  });

});
