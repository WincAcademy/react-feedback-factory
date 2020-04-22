import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { javascript, typescript, xml, css, scss, less } from 'react-syntax-highlighter/dist/cjs/languages/hljs';
import GitHubStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/github';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('xml', xml);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('less', less);

const Highlight = ({ code, lineProps }) => (
  <div className='highlight'>
    <SyntaxHighlighter
      code={code}
      style={GitHubStyle}
      showLineNumbers={true}
      wrapLines={true}
      lineProps={lineProps}
    />
  </div>
);

export default Highlight;
