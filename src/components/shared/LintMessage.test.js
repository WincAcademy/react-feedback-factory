import { render } from '@testing-library/react';
import React from 'react';
import LintMessage from "./LintMessage";

const mockError = {
  rule: 'no-unused-vars',
  severity: 'warning',
  message: 'Variable is unused',
  line: 1,
  column: 1
};

describe('LintMessage component', () => {

  it('should contain the "lint-message" class', () => {
    const { container } = render(<LintMessage error={mockError}/>);
    const classList = container.firstChild.classList;
    expect(classList.contains('lint-message')).toBe(true);
  });

  it('should render the message properties', () => {
    const { container } = render(<LintMessage error={mockError}/>);
    const table = container.querySelector('table');
    expect(table).toBeTruthy();
    expect(table.rows.length).toEqual(4);
  });

});
