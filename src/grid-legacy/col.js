import React, {useContext} from 'react';
import {GridContext} from '../config/context';
import {createColumnClassName} from './create-classnames';

export const Col = ({justifyItems, alignItems, s = '1/13', m, l, children}) => {
  const context = useContext(GridContext);
  const columnClassNames = createColumnClassName(context, {s, m, l}, alignItems, justifyItems);
  return (
    <div className={columnClassNames}>
      <GridContext.Provider value={{s, m, l}}>{children}</GridContext.Provider>
    </div>
  );
};
