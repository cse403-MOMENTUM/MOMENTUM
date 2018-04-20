import * as d3 from 'd3';
import * as React from 'react';
import DotPlot from './DotPlot';
<<<<<<< HEAD
import Graph from './Graph';
=======
// import Graph from './Graph';
>>>>>>> broken dotplots, but they exist

interface IProps {
  margin: {
    bottom: number,
    left: number,
    right: number,
    top: number
  };
  z_limit: number;
  width: number;
  height: number;
}

class NormalDistribution extends React.Component<IProps, {}> {
  // taken from Jason Davies science library
  // https://github.com/jasondavies/science.js/blob/master/src/stats/distribution/gaussian.js
  // private static gaussian_pdf(x: number, mean: number, sigma: number) {
  //   const gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
  //   const adjustedX = (x - mean) / sigma;
  //   return gaussianConstant * Math.exp(-.5 * adjustedX * adjustedX) / sigma;
  // };

  public ref: SVGElement;

  private xScale: d3.ScaleContinuousNumeric<number, number>;
  private yScale: d3.ScaleContinuousNumeric<number, number>;;

  constructor(props: IProps) {
    super(props);
    this.xScale = d3.scaleLinear()
                    .domain([0 - (this.props.z_limit * 1), 0 + (this.props.z_limit * 1)])
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

    // function graphFun(x: number) {
    //   return NormalDistribution.gaussian_pdf(x, 0, 1);
    // }

    return (
      <svg width={paddedWidth} height={paddedHeight}>
        <Graph xScale={this.xScale} yScale={this.yScale} numPoints={width} fun={graphFun} width={width} height={height} translate={{x: margin.left, y: margin.top}} />
        <DotPlot
          xScale={this.xScale} yScale={this.yScale}
          samples={20}
          bins={25}
          width={width} height={height}
          translate={{x: margin.left, y: margin.top}} />
      </svg>
    );
  }
}

export default NormalDistribution;
