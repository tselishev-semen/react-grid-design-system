import {ALIGN_ITEMS, JUSTIFY_ITEMS} from './constants';
import classnames from 'classnames';

const SMALL_MODIFIER = '';
const MEDIUM_MODIFIER = '--medium';
const LARGE_MODIFIER = '--large';

const generateColClasses = (column, modifier, parentColumn) => {
  if (column) {
    const {start, end, isLast, isFirst, offset} = column;

    const allColumnsCount = parentColumn ? parentColumn.end - parentColumn.start : 12;
    const columnWidth = end - start;
    return [
      'fallback-column',
      `fallback-column-${allColumnsCount}-${columnWidth}${modifier}`,
      {
        [`fallback-column-offset-${allColumnsCount}-${offset}`]: offset,
        'fallback-column--not-last': !isLast,
        [`fallback-column--last-${allColumnsCount}-${allColumnsCount+ 1-end}`]: isLast,
      }
    ];
  }
  return [];
};

export const createColumnClassName = (context = {}, {s, m, l}, alignItems, justifyItems) => {
  const classes = [
    ...generateColClasses(s, SMALL_MODIFIER, context.s),
    ...generateColClasses(m, MEDIUM_MODIFIER, context.m),
    ...generateColClasses(l, LARGE_MODIFIER, context.l)
  ];

  const alignClasses = {
    'fallback-column--align-center': alignItems === ALIGN_ITEMS.center,
    'fallback-column--align-normal': alignItems === ALIGN_ITEMS.normal,
    'fallback-column--align-end': alignItems === ALIGN_ITEMS.end
  };
  const justifyClasses = {
    'fallback-column--justify-center': justifyItems === JUSTIFY_ITEMS.center,
    'fallback-column--justify-normal': justifyItems === JUSTIFY_ITEMS.normal
  };

  return classnames(...classes, alignClasses, justifyClasses);
};

//todo: do not need subgrid?
export const createGridClassName = (alignItems, justifyItems) => {
  const alignClasses = {
    'fallback-grid--align-center': alignItems === ALIGN_ITEMS.center,
    'fallback-grid--align-normal': alignItems === ALIGN_ITEMS.normal,
    'fallback-grid--align-end': alignItems === ALIGN_ITEMS.end
  };
  const justifyClasses = {
    'fallback-grid--justify-center': justifyItems === JUSTIFY_ITEMS.center,
    'fallback-grid--justify-normal': justifyItems === JUSTIFY_ITEMS.normal
  };
  return classnames('fallback-grid', alignClasses, justifyClasses);
};
