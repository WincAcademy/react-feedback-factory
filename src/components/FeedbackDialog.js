import React, { useState } from 'react';
import Button from "./shared/Button";
import Modal from "react-bootstrap/Modal";

const copy = (text) => {
  navigator.clipboard.writeText(text)
};

const download = (text, fileName) => {
  const blob = new Blob([text], {type: "text/plain"});
  const link = document.createElement("a");
  link.download = fileName;
  link.href = window.webkitURL.createObjectURL(blob);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const FeedbackDialog = ({ show, onHide }) => {
  const [text, setText] = useState('');

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header>
        <Modal.Title>Feedback</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea className="input" rows="20" value={text} onChange={e => setText(e.target.value)}/>
      </Modal.Body>
      <Modal.Footer>
        <Button size="sm" onClick={() => copy(text)}>
          Copy
        </Button>
        <Button size="sm" onClick={() => download(text, 'feedback.txt')}>
          Download
        </Button>
        <Button size="sm" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FeedbackDialog;
