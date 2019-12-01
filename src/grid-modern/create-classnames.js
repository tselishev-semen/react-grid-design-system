import classnames from 'classnames';
import {ALIGN_ITEMS, JUSTIFY_ITEMS} from './constants';

const SMALL_MODIFIER = '';
const MEDIUM_MODIFIER = '--medium';
const LARGE_MODIFIER = '--large';

export const createGridClassName = ({s, m, l} = {}, alignItems, justifyItems) => {
  const subGridClasses = [
    createSubGridClass(s, SMALL_MODIFIER),
    createSubGridClass(m, MEDIUM_MODIFIER),
    createSubGridClass(l, LARGE_MODIFIER)
  ];

  const alignClasses = {
    'grid--align-center': alignItems === ALIGN_ITEMS.center,
    'grid--align-normal': alignItems === ALIGN_ITEMS.normal,
    'grid--align-end': alignItems === ALIGN_ITEMS.end
  };
  const justifyClasses = {
    'grid--justify-center': justifyItems === JUSTIFY_ITEMS.center,
    'grid--justify-normal': justifyItems === JUSTIFY_ITEMS.normal
  };
  return classnames('grid', ...subGridClasses, alignClasses, justifyClasses);
};

const createSubGridClass = (configuration, modifier) => {
  if (configuration) {
    const [start, end] = configuration.split('/');
    return `grid-${end - start}${modifier}`;
  }
};

const createColumnClass = (configuration, modifier) => {
  if (configuration) {
    const [start, end] = configuration.split('/');
    return `col-${start}-${end}${modifier}`;
  }
};
export const createColumnClasses = ({s, m, l}, alignItems, justifyItems) => {
  const columnClasses = [
    createColumnClass(s, SMALL_MODIFIER),
    createColumnClass(m, MEDIUM_MODIFIER),
    createColumnClass(l, LARGE_MODIFIER)
  ];

  const alignClasses = {
    'col': true,
    'col--align-center': alignItems === ALIGN_ITEMS.center,
    'col--align-normal': alignItems === ALIGN_ITEMS.normal,
    'col--align-end': alignItems === ALIGN_ITEMS.end
  };
  const justifyClasses = {
    'col--justify-center': justifyItems === JUSTIFY_ITEMS.center,
    'col--justify-normal': justifyItems === JUSTIFY_ITEMS.normal
  };
  return classnames(...columnClasses, alignClasses, justifyClasses);
};
