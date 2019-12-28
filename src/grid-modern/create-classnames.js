import classnames from 'classnames';
import {ALIGN_ITEMS, JUSTIFY_ITEMS} from '../config/constants';

const SMALL_MODIFIER = '';
const MEDIUM_MODIFIER = '--medium';
const LARGE_MODIFIER = '--large';

const createSubGridClass = (configuration, modifier) => {
  if (configuration) {
    const [start, end] = configuration.split('/');
    return `grid-${end - start}${modifier}`;
  }
};

export const createGridClassName = ({s, m, l} = {}, alignItems, justifyItems) => {
  const subGridClasses = [
    createSubGridClass(s, SMALL_MODIFIER),
    createSubGridClass(m, MEDIUM_MODIFIER),
    createSubGridClass(l, LARGE_MODIFIER)
  ];

  const centringClasses = {
    'grid--align-center': alignItems === ALIGN_ITEMS.center,
    'grid--align-end': alignItems === ALIGN_ITEMS.end,
    'grid--align-normal': alignItems === ALIGN_ITEMS.normal,
    'grid--justify-center': justifyItems === JUSTIFY_ITEMS.center,
    'grid--justify-normal': justifyItems === JUSTIFY_ITEMS.normal
  };
  return classnames('grid', ...subGridClasses, centringClasses);
};

const createColumnClass = (configuration, modifier) => {
  if (configuration) {
    const [start, end] = configuration.split('/');
    return `column-${start}-${end}${modifier}`;
  }
};
export const createColumnClasses = ({s, m, l}, alignItems, justifyItems) => {
  const columnClasses = [
    createColumnClass(s, SMALL_MODIFIER),
    createColumnClass(m, MEDIUM_MODIFIER),
    createColumnClass(l, LARGE_MODIFIER)
  ];

  const centringClasses = {
    'column': true,
    'column--align-center': alignItems === ALIGN_ITEMS.center,
    'column--align-end': alignItems === ALIGN_ITEMS.end,
    'column--align-normal': alignItems === ALIGN_ITEMS.normal,
    'column--justify-center': justifyItems === JUSTIFY_ITEMS.center,
    'column--justify-normal': justifyItems === JUSTIFY_ITEMS.normal
  };
  return classnames(...columnClasses, centringClasses);
};
