import React from 'react';
import Input from "./shared/Input";
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
      {({ search, items }) => (
        <React.Fragment>
          <Input className="tree-search" onChange={e => search(e.target.value)} placeholder="Search repository" />
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
 * Util function to map API tree response to TreeView format.
 */
export const mapNode = (item, level = 0) => {
  const node = {
    key: item.name + level,
    label: item.name,
    type: item.type,
    path: item.path,
  };

  if (node.type === 'directory') {
    node.nodes = item.children
      .map(child => mapNode(child, level + 1))
      .sort((a, b) => a.type.localeCompare(b.type));
  }

  return node;
};
