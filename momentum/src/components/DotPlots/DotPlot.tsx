// https://github.com/mjskay/when-ish-is-my-bus/blob/master/quantile-dotplots.md
// D3 DotPlot: https://bl.ocks.org/gcalmettes/95e3553da26ec90fd0a2890a678f3f69

import * as d3 from 'd3';
import * as jStat from 'jstat';
import * as _ from 'lodash';
import * as React from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';

interface IProps {
  translate: {x: number, y: number};
  width: number;
  height: number;
  xScale: d3.ScaleContinuousNumeric<number, number>;
  yScale: d3.ScaleContinuousNumeric<number, number>;
  samples: number;
  bins: number;
}

class DotPlot extends React.Component<IProps, {}> {
<<<<<<< HEAD
  private static getSamples(numSamples: number): number[] {
=======
  private static getSamples(numSamples: number) {
>>>>>>> dotplots WIP. committing before break
    const start = 1/numSamples / 2;
    const stop = 1 - 1/numSamples / 2;
    const step = (stop - start) / (numSamples - 1);
    return _.range(start, stop + step, step);
  }

<<<<<<< HEAD
  private static getQuantiles(numSamples: number): Array<[number, number]> {
    return DotPlot.getSamples(numSamples).map(s => [s, jStat.normal.inv(s, 0, 1)] as [number, number]);
=======
  private static getQuantiles(numSamples: number) {
    return DotPlot.getSamples(numSamples).map(s => [s, jStat.normal.inv(s, 0, 1)]);
>>>>>>> dotplots WIP. committing before break
  }

  public render() {
    return (
      <g transform={'translate(' + this.props.translate.x + ',' + this.props.translate.y + ')'}>
        <XAxis width={this.props.width} height={this.props.height} scale={this.props.xScale}/>
        <YAxis height={this.props.height} scale={this.props.yScale} />
<<<<<<< HEAD
        {this.plotHistogram()}
      </g>
    );
  }

  private plotHistogram() {
    // full plot
    const plot = this.makeHistogram().map((bin, iBin) => {
      // dots in each bin
      const dots = bin.map((dot, iDot) => {
        const radius = (this.props.xScale(bin.x1) - this.props.xScale(bin.x0))/2;

        return (
          <circle
            key={iDot}
            r={radius}
            cx={0} // determined by bin
            cy={-iDot * 2 * radius - radius}
            />
        )
      });

      // wrap dots in a group
      return (
        <g className="bin" key={iBin} transform={'translate(' + this.props.xScale(bin.x0) + ',' + this.props.height + ')'}>
          {dots}
        </g>
      );
    });

    // wrap plot in a group
    return (
      <g className="plot">
        {plot}
=======

>>>>>>> dotplots WIP. committing before break
      </g>
    );
  }

  private makeHistogram() {
    return d3.histogram()
      .domain(this.props.xScale.domain() as [number, number])
<<<<<<< HEAD
      .thresholds(this.props.xScale.ticks(this.props.bins))
      (DotPlot.getQuantiles(this.props.samples).map(d => d[1]));
=======
      .thresholds(this.props.xScale.ticks(this.props.bins));
      // .value(function(d) { return d.Value;} )
>>>>>>> dotplots WIP. committing before break
  }
}

export default DotPlot;
