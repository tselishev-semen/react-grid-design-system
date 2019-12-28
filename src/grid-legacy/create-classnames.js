import {ALIGN_ITEMS, JUSTIFY_ITEMS} from '../config/constants';
import classnames from 'classnames';

const SMALL_MODIFIER = '';
const MEDIUM_MODIFIER = '--medium';
const LARGE_MODIFIER = '--large';

const generateColClasses = (column, modifier, parentColumn) => {
  if (column) {
    const {start, end, isLast, offset} = column;

    const allColumnsCount = parentColumn ? parentColumn.end - parentColumn.start : 12;
    const columnWidth = end - start;
    let rightGap = allColumnsCount + 1 - end;
    return [
      'fallback-column',
      `fallback-column-${allColumnsCount}-${columnWidth}${modifier}`,
      `fallback-column-offset-${allColumnsCount}-${offset}${modifier}`,
      {
        [`fallback-column-not-last${modifier}`]: !isLast,
        [`fallback-column-last-${allColumnsCount}-${rightGap}${modifier}`]: isLast
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

  const centringClasses = {
    'fallback-column--align-center': alignItems === ALIGN_ITEMS.center,
    'fallback-column--align-end': alignItems === ALIGN_ITEMS.end,
    'fallback-column--align-normal': alignItems === ALIGN_ITEMS.normal,
    'fallback-column--justify-center': justifyItems === JUSTIFY_ITEMS.center,
    'fallback-column--justify-normal': justifyItems === JUSTIFY_ITEMS.normal
  };

  return classnames(...classes, centringClasses);
};

export const createGridClassName = (alignItems, justifyItems) => {
  const centringClasses = {
    'fallback-grid--align-center': alignItems === ALIGN_ITEMS.center,
    'fallback-grid--align-end': alignItems === ALIGN_ITEMS.end,
    'fallback-grid--align-normal': alignItems === ALIGN_ITEMS.normal,
    'fallback-grid--justify-center': justifyItems === JUSTIFY_ITEMS.center,
    'fallback-grid--justify-normal': justifyItems === JUSTIFY_ITEMS.normal
  };
  return classnames('fallback-grid', centringClasses);
};
