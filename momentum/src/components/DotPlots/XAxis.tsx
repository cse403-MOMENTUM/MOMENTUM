import * as d3 from 'd3';
import * as React from 'react';

interface Props {
  width: number;
  height: number;
  scale: d3.ScaleContinuousNumeric<number, number>;
}

class XAxis extends React.Component<Props, {}> {
  public ref: SVGGElement;

  public render() {
    const xAxis = d3.axisBottom(this.props.scale);

    return (
      <g className="XAxis" transform={'translate(0,' + this.props.height + ')'} ref={(ref: SVGGElement) => {this.ref = ref; d3.select(ref).call(xAxis);}} />
    );
  }
}

export default XAxis;
