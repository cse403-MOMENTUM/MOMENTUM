import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NormalDistribution from './components/DotPlots/NormalDistribution';
import TaskInput from './components/Task/TaskInput';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<<<<<<< HEAD
  <div>
    <NormalDistribution width={960} height={450}
      z_limit={4}
      margin={{
        bottom: 30,
        left: 50,
        right: 20,
        top: 20
      }} />
      <TaskInput taskName="My Task" />
  </div>,
=======
  <NormalDistribution width={960} height={450}
    z_limit={4}
    margin={{
      bottom: 30,
      left: 50,
      right: 20,
      top: 20
    }} />,
>>>>>>> properly scaled graph
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
