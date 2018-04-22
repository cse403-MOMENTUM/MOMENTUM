import * as d3 from 'd3';
import * as React from 'react';

interface IProps {
  height: number;
  scale: d3.ScaleContinuousNumeric<number, number>;
}

class YAxis extends React.Component<IProps, {}> {
  public ref: SVGGElement;

  public render() {
    const yAxis = d3.axisLeft(this.props.scale);

    return (
      <g className="YAxis" ref={(ref: SVGGElement) => {this.ref = ref; d3.select(ref).call(yAxis)}} />
    );
  }
}

export default YAxis;
