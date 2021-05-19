import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/ethanjones-git/56ee858b918fd848ef478c9b9a7e748f/raw/8a7e00019e4696ba15c2d7d5815c67484c748305/islam.csv';

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