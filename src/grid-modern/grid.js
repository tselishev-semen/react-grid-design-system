import React, {useContext} from 'react';
import {GridContext} from '../config/context';
import {createGridClassName} from './create-classnames';

export const Grid = ({children, alignItems, justifyItems}) => {
  const context = useContext(GridContext);
  const gridClassNames = createGridClassName(context, alignItems, justifyItems);
  return <div className={gridClassNames}>{children}</div>;
};
