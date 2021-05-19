import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/ethanjones-git/86eb31f94b8d20d2d72f27c8bbc3279b/raw/a27f1a22d74711a64dceb6af6291c250d137ed5d/comm.csv';

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