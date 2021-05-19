import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/ethanjones-git/617efcb0f45bd22f130be628bda9f491/raw/794eaca7ecd4a89ce749b5876e0babf6afa778e3/lib.csv';

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