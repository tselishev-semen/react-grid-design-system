import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {JUSTIFY_ITEMS, ALIGN_ITEMS} from './constants';
import {createGridClassName} from './create-classnames';
import {transformToFallbackMode} from './transform-cols-props';

export const Grid = ({children, className, alignItems, justifyItems}) => {
  const gridClassNames = createGridClassName(alignItems, justifyItems);
  return <div className={classnames(className, gridClassNames)}>{transformToFallbackMode(children)}</div>;
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
