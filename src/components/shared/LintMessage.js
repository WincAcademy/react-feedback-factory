import React from 'react';

const LintMessage = ({ error }) => {
  const { rule, severity, message, line, column } = error;

  return (
    <div className="lint-message">
      <table>
        <tbody>
          <tr>
            <td>Rule</td>
            <td>{ rule }</td>
          </tr>
          <tr>
            <td>Severity</td>
            <td>{ severity }</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>{ message }</td>
          </tr>
          <tr>
            <td>Position</td>
            <td>line { line }, column { column }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default LintMessage;
