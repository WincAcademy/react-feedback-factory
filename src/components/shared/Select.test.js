import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Select from './Select';

describe('Select component', () => {

  it('should contain the "input" class', () => {
    const { container } = render(<Select/>);
    const classList = container.firstChild.classList;
    expect(classList.contains('input')).toBe(true);
  });

  it('should render options as children', () => {
    const { container } = render(<Select><option value="option">Option</option></Select>);
    const option = container.querySelector('option');
    expect(option).toBeTruthy();
    expect(option.value).toEqual('option');
  });

  it('should be disabled', () => {
    const { container } = render(<Select disabled={true}/>);
    expect(container.firstChild).toBeDisabled();
  });

  it('should invoke the onChange callback', () => {
    const onChange = jest.fn();
    const { container } = render(<Select onChange={onChange}/>);
    fireEvent.change(container.firstChild, { target: { value: "query" } });
    expect(onChange).toHaveBeenCalled();
  });

});
