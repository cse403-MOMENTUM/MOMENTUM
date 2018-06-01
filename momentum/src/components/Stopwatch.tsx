import * as React from 'react';
import { Button} from 'semantic-ui-react';

interface Props {
 status: boolean;
 runningTime: number;
}

class Stopwatch extends React.Component<Props, {}> {
 constructor(props: Props) {
   super(props);
 }

 public render() {


   return (
     <div className="status">
      <p>You are currently <span className="working">{this.props.status? '' : 'NOT'} WORKING</span> on this task</p>
      <Button color="blue">{this.props.status? 'Start' : 'Stop'} working on this task</Button>
     </div>
   );
 }
}

export default Stopwatch;
