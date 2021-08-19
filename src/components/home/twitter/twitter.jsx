import React from 'react';
import { Timeline } from 'react-twitter-widgets'

// Timeline (with options)
<Timeline
  dataSource={{
    sourceType: 'https://twitter.com/nfdi4chem?lang=en',
    screenName: 'Nfdi4Chem'
  }}
  options={{
    height: '400',
    width:'400',
    align: 'right'
  }}
/>

export default Timeline;