import React, { Component } from 'react';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);

if (!window.hljs) {
  // make hljs available on the window object, which is
  // required for the line numbers library to work
  window.hljs = hljs;
  require('highlightjs-line-numbers.js');
}

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    this.highlight();
  }

  highlight = () => {
    const node = this.nodeRef.current.querySelector('code');

    if (node.innerHTML) {
      window.hljs.highlightBlock(node);
      window.hljs.lineNumbersBlock(node);
      window.setTimeout(() => node.classList.add('hljs-line-numbers'), 0);
    }
  };

  selectLine = (e) => {
    const node = e.target.closest('[data-line-number]');

    if (node) {
      const line = node.dataset.lineNumber;
      this.props.onSelectLine(line);
    }
  };

  render() {
    const { code } = this.props;

    return (
      <pre className='highlight' ref={this.nodeRef} onClick={this.selectLine}><code>{ code }</code></pre>
    );
  }
}


export default Highlight;
