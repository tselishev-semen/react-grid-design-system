import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {JUSTIFY_ITEMS, ALIGN_ITEMS} from './constants';
import {GridContext} from './context';
import {createGridClassName} from './create-classnames';

export const Grid = ({children, className, alignItems, justifyItems}) => {
  const context = useContext(GridContext);
  const gridClassNames = createGridClassName(context, alignItems, justifyItems);
  return <div className={classnames(className, gridClassNames)}>{children}</div>;
};

Grid.defaultProps = {
  alignItems: ALIGN_ITEMS.normal
};
Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  alignItems: PropTypes.oneOf(Object.values(ALIGN_ITEMS)),
  justifyItems: PropTypes.oneOf(Object.values(JUSTIFY_ITEMS))
};
