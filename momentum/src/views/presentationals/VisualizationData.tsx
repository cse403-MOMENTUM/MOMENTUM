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
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.
         Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
         </p>
        </div>
      </Grid.Column>
     </Grid.Row>
     </Grid>
   );
 }
}

export default VisualizationData;
