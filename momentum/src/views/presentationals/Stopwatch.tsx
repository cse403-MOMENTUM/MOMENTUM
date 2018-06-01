import * as React from 'react';
import { Button} from 'semantic-ui-react';


class Stopwatch extends React.Component<{}, {}> {
 // constructor(props: Props) {
 //   super(props);
 // }
 public state = {
   runningTime: 0,
   status: false
 };

 public handleClick = () => {
  this.setState({ runningTime: 5, running: true });
 }

 public render() {
   const { status, runningTime } = this.state;

   return (
     <div className="status">
      <p>{runningTime}ms</p>
      <p>You are currently <span className="working">{status? '' : 'NOT'} WORKING</span> on this task</p>
      <Button onClick={this.handleClick} color="blue">{status? 'Start' : 'Stop'} working on this task</Button>
     </div>
   );
 }
}

export default Stopwatch;
