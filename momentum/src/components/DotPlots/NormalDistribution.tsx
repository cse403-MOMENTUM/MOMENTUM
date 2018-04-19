import * as d3 from 'd3';
import * as React from 'react';
import Graph from './Graph';
import XAxis from './XAxis';
import YAxis from './YAxis';

interface IProps {
  margin: {
    bottom: 30,
    left: 50,
    right: 20,
    top: 20
  };
  width: number;
  height: number;
}

class NormalDistribution extends React.Component<IProps, {}> {
  // taken from Jason Davies science library
  // https://github.com/jasondavies/science.js/blob/master/src/stats/distribution/gaussian.js
  private static gaussian_pdf(x: number, mean: number, sigma: number) {
    const gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
    const adjustedX = (x - mean) / sigma;
    return gaussianConstant * Math.exp(-.5 * adjustedX * adjustedX) / sigma;
  };

  public ref: SVGElement;

  private xScale: d3.ScaleContinuousNumeric<number, number>;
  private yScale: d3.ScaleContinuousNumeric<number, number>;;

  constructor(props: IProps) {
    super(props);
    this.xScale = d3.scaleLinear()
                    //  .domain([-7,7])
                     .range([0, this.props.width]);
    this.yScale = d3.scaleLinear()
                   //  .domain([0,.6])
                     .range([this.props.height, 0]);
  }

  public componentDidMount() {
    // d3.select(this.ref).data([this.props.node]);
  }

  public render() {
    const {margin, width, height} = this.props;

    const paddedWidth = width + margin.left + margin.right;
    const paddedHeight = height + margin.top + margin.bottom;

    function graphFun(x: number) {
      return NormalDistribution.gaussian_pdf(x, 0, 1);
    }

    return (
      <svg transform={'translate(' + margin.left + ',' + margin.top + ')'} width={paddedWidth} height={paddedHeight}>
        <XAxis width={width} height={height} scale={this.xScale}/>
        <YAxis padding={margin.left} height={height} scale={this.yScale} />
        <Graph xScale={this.xScale} yScale={this.yScale} numPoints={width} fun={graphFun} />
      </svg>
    );
  }
}

export default NormalDistribution;
