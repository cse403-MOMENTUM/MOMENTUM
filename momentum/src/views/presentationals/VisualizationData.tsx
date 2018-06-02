import * as React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import NormalDistribution from '../../components/DotPlots/NormalDistribution';

class VisualizationData extends React.Component {

 public render() {
   return (
    <Grid className="VisualizationData">
     <Grid.Row>
      <Grid.Column width={7}>
      <NormalDistribution
      width={374} height={194}
      // width={960} height={450}
      z_limit={4}
      margin={{
        bottom: 30,
        left: 50,
        right: 20,
        top: 20
      }} />
      </Grid.Column>
      <Grid.Column width={9} className="description middle aligned">
       <div className="ui align">
        <Header as="h4">Project Data Visualization</Header>
        <p>To the left is a dot plot visualization of how many more hours we think your project will take to complete. Each dot represents a 1 in 20 chance that your project will be completed in about the number of hours labeled on the x-axis.
         </p>
        </div>
      </Grid.Column>
     </Grid.Row>
     </Grid>
   );
 }
}

export default VisualizationData;
