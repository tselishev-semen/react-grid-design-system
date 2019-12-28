import React from 'react';
import {createGridClassName} from './create-classnames';
import {transformToFallbackMode} from './transform-cols-props';

export const Grid = ({children, alignItems, justifyItems}) => {
  const gridClassNames = createGridClassName(alignItems, justifyItems);
  return <div className={gridClassNames}>{transformToFallbackMode(children)}</div>;
};
