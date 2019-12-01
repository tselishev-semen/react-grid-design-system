import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {JUSTIFY_ITEMS, ALIGN_ITEMS} from './constants';
import {GridContext} from './context';
import {createColumnClassName} from './create-classnames';

export const Col = ({justifyItems, alignItems, s, m, l, children, className}) => {
  const context = useContext(GridContext);
  const columnClassNames = createColumnClassName(context, {s, m, l}, alignItems, justifyItems);
  return (
    <div className={classnames(className, columnClassNames)}>
      <GridContext.Provider value={{s, m, l}}>{children}</GridContext.Provider>
    </div>
  );
};

Col.defaultProps = {
  s: '1/13'
};
Col.propTypes = {
  children: PropTypes.node.isRequired,
  justifyItems: PropTypes.oneOf(Object.values(JUSTIFY_ITEMS)),
  alignItems: PropTypes.oneOf(Object.values(ALIGN_ITEMS)),
  className: PropTypes.string,
  s: PropTypes.string,
  m: PropTypes.string,
  l: PropTypes.string
};
