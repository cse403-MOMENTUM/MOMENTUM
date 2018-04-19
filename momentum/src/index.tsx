import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NormalDistribution from './components/DotPlots/NormalDistribution';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <NormalDistribution width={960} height={450}
    margin={{
      bottom: 30,
      left: 50,
      right: 20,
      top: 20
    }} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
