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
  this.setState({ runningTime: 5, status: !this.state.status });
 }

 public render() {
   const { status } = this.state;

   return (
     <div className="status">
        {/* <p>{runningTime}ms</p> */}
        <p>You are currently <span className="working">{status? '' : 'NOT'} WORKING</span> on this task</p>
        <Button color="blue" onClick={this.handleClick}>{status? 'Stop' : 'Start'} working on this task</Button>
     </div>
   );
 }
}

export default Stopwatch;
