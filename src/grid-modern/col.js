import React from 'react';
import {GridContext} from '../config/context';
import {createColumnClasses} from './create-classnames';

export const Col = ({justifyItems, alignItems, s = '1/13', m, l, children}) => {
  const columnClassNames = createColumnClasses({s, m, l}, alignItems, justifyItems);
  return (
    <div className={columnClassNames}>
      <GridContext.Provider value={{s, m, l}}>{children}</GridContext.Provider>
    </div>
  );
};
