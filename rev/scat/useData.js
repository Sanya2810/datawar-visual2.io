import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/ethanjones-git/6e0ea1bc3beb2b218a8697128cf99376/raw/19ea054ce0dd6798b3e7eebb4f0fd847b25a0f45/rev.csv';

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