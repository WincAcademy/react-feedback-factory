import React, { Component } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import scss from 'react-syntax-highlighter/dist/esm/languages/hljs/scss';
import less from 'react-syntax-highlighter/dist/esm/languages/hljs/less';
import GitHubStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/github';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('xml', xml);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('less', less);

class Highlight extends Component {

  render() {
    const { code, lineProps } = this.props;

    return (
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
  }
}


export default Highlight;
