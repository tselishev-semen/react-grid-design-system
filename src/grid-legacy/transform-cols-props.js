import React from 'react';

export const transformCssGridToFlexGrid = (configuration) => {
  return configuration.map(({start, end}, index, array) => {
    const prevCol = array[index - 1];
    const nextCol = array[index + 1];
    const prevColEnd = prevCol ? prevCol.end : null;
    const nextColStart = nextCol ? nextCol.start : null;
    const isFirst = index === 0 || start < prevColEnd;
    const isLast = !nextCol || end > nextColStart;

    const offset = isFirst ? start - 1 : start - prevColEnd;
    return {start, end, isFirst, isLast, offset};
  });
};

const calculateSize = (colSize) => {
  const [start, end] = colSize.split('/');
  return {start: Number(start), end: Number(end)};
};

const extractConfiguration = (children) => {
  const sConfiguration = [];
  const mConfiguration = [];
  const lConfiguration = [];
  React.Children.forEach(children, ({props}) => {
    const {s = '1/13', m = s, l = m} = props;
    sConfiguration.push(calculateSize(s));
    mConfiguration.push(calculateSize(m));
    lConfiguration.push(calculateSize(l));
  });
  return {
    s: sConfiguration,
    m: mConfiguration,
    l: lConfiguration
  };
};

export const transformToFallbackMode = (children) => {
  let preparedChildren = Array.isArray(children) ? children : [children];
  preparedChildren = preparedChildren.filter(Boolean);
  const {s, m, l} = extractConfiguration(preparedChildren);
  const sTransformed = transformCssGridToFlexGrid(s);
  const mTransformed = transformCssGridToFlexGrid(m);
  const lTransformed = transformCssGridToFlexGrid(l);

  return React.Children.map(preparedChildren, (component, index) => {
    const newProps = component
      ? {
          s: sTransformed[index],
          m: mTransformed[index],
          l: lTransformed[index]
        }
      : null;
    return React.cloneElement(component, newProps);
  });
};
