// D3js directly manipulate to the DOM when Reactjs is not. Create a react hook to make d3 be useable.

import React from 'react';
import * as d3 from 'd3';

export const useD3 = (renderChartFn, dependencies) => {
  const ref = React.useRef();

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current));
    return () => { };
  }, dependencies);
  return ref;
}