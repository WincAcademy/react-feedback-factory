import React from 'react';
import { ReactComponent as FileIcon } from '../assets/img/file.svg';
import { ReactComponent as FolderIcon } from '../assets/img/folder.svg';

const TreeItem = ({
  label = 'unknown',
  level = 0,
  hasNodes = false,
  isOpen = false,
  onClick,
  toggleNode,
  active,
  focused,
}) => {
  const click = (e) => {
    hasNodes && toggleNode && toggleNode();
    onClick(e);
  };

  return (
    <li
      role="button"
      className={`tree-item tree-item-level-${level} ${hasNodes ? 'tree-item--children' : ''} ${isOpen ? 'tree-item--open' : ''} ${active ? 'tree-item--active' : ''} ${focused ? 'tree-item--focused' : ''}`}
      aria-pressed={active}
      onClick={click}
    >
      {hasNodes ? <FolderIcon fill="#dcb67a"/> : <FileIcon/>}
      <span>{label}</span>
    </li>
  )
};

export default TreeItem;
