import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/ethanjones-git/1731d22e9cc7de59ba41d4677cfc2fe9/raw/dde9f16434250b72e95d9a2c0a56db0a8cc5b9e5/armed.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.Days = +d.Days;
      d.km = -d.km;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
};