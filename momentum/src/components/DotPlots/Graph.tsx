import * as d3 from 'd3';
import * as React from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';

interface Props {
  width: number;
  height: number;
  translate: {x: number, y: number};
  xScale: d3.ScaleContinuousNumeric<number, number>;
  yScale: d3.ScaleContinuousNumeric<number, number>;
  numPoints: number;
  fun(x: number): number;
}

class Graph extends React.Component<Props, {}> {
  public ref: SVGPathElement;

  public render() {
    return (
      <g transform={'translate(' + this.props.translate.x + ',' + this.props.translate.y + ')'}>
        <XAxis width={this.props.width} height={this.props.height} scale={this.props.xScale}/>
        <YAxis height={this.props.height} scale={this.props.yScale} />
        <path className="line" d={this.makeLine()(this.makeData())!} stroke="black" fill="none" />
      </g>
    );
  }

  private makeLine(): d3.Line<[number, number]> {
    return d3.line()
      .x(d => this.props.xScale(d[0]))
      .y(d => this.props.yScale(d[1]));
  }

  private makeData(): Array<[number,number]> {
    const data: Array<[number, number]> = [];
    for (let i = 0; i < this.props.numPoints; i++) {
      const x = this.props.xScale.invert(i);
      const y = this.props.fun(x);
      data[i] = [x, y];
    }
    return data;
  }
}

export default Graph;
