import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

export const PairwiseSimilarityBar = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const data = getData(props);
          setData(data);
        }
        fetchData();
      }, []);

    function getData(props) {
        let pairwiseSimilarity = props.pairwiseSimilarity
        let array = ['property', 'class', 'import', 'namespace', 'individual'];
        let pairs = [];

        array.forEach(name => {
            let item = {
                "pair": pairwiseSimilarity.pair.first + '-' + pairwiseSimilarity.pair.second,
                "value": Math.round((pairwiseSimilarity['characteristics'][name]['percent'] + Number.EPSILON) * 100) / 100,
                "type": name
            }
            pairs.push(item);
        })

        return pairs;
    }

  const config = {
    data,
    width: 100,
    height: 180,
    isStack: true,
    xField: 'pair',
    yField: 'value',
    seriesField: 'type',
    // meta: {
    //     value: {
    //     min: 0,
    //     max: 100,
    //    },
    // },
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
    color:['#FA8072','#FFA500','#FFFF00','#00FF7F','#00BFFF'],
  };

  return <Column {...config} />;
};
