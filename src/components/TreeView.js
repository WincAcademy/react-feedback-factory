import React from 'react';
import TreeItem from "./TreeItem";
import TreeMenu from "react-simple-tree-menu";

const TreeView = ({ data, onClickItem, activeKey }) => {
  const renderItems = (items) => items.map(({key, ...props}) => (
    <TreeItem key={key} {...props} />
  ));

  return (
    <TreeMenu
      data={data}
      onClickItem={onClickItem}
      initialActiveKey={activeKey}
    >
      {({ items }) => (
        <React.Fragment>
          <ul className="tree-view">
            { renderItems(items) }
          </ul>
        </React.Fragment>
      )}
    </TreeMenu>
  )
};

export default TreeView;

/**
 * Recursive utility function to map the API tree response
 * to a format that is compatible with TreeMenu.
 *
 * @param {object} item
 * @param {number} level
 * @returns {object}
 */
export const mapTreeNode = (item, level = 0) => {
  const node = {
    key: item.name + level,
    label: item.name,
    type: item.type,
    path: item.path,
  };

  if (node.type === 'directory') {
    node.nodes = item.children
      .map(child => mapTreeNode(child, level + 1))
      .sort((a, b) => a.type.localeCompare(b.type));
  }

  return node;
};
