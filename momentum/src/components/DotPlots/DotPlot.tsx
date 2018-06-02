// https://github.com/mjskay/when-ish-is-my-bus/blob/master/quantile-dotplots.md
// D3 DotPlot: https://bl.ocks.org/gcalmettes/95e3553da26ec90fd0a2890a678f3f69

import * as d3 from 'd3';
import * as jStat from 'jstat';
import * as _ from 'lodash';
import * as React from 'react';
import XAxis from './XAxis';
import XAxisLabel from './XAxisLabel';
import YAxis from './YAxis';

interface Props {
  translate: {x: number, y: number};
  width: number;
  height: number;
  xScale: d3.ScaleContinuousNumeric<number, number>;
  yScale: d3.ScaleContinuousNumeric<number, number>;
  samples: number;
  bins: number;
}

class DotPlot extends React.Component<Props, {}> {
  private static getSamples(numSamples: number): number[] {
    const start = 1/numSamples / 2;
    const stop = 1 - 1/numSamples / 2;
    const step = (stop - start) / (numSamples - 1);
    return _.range(start, stop + step, step);
  }

  private static getQuantiles(numSamples: number): Array<[number, number]> {
    return DotPlot.getSamples(numSamples).map(s => [s, jStat.normal.inv(s, 0, 1)] as [number, number]);
  }

  public render() {
    return (
      <g transform={'translate(' + this.props.translate.x + ',' + this.props.translate.y + ')'}>
        <XAxisLabel width={this.props.width} height={this.props.height}/>
        <XAxis width={this.props.width} height={this.props.height} scale={this.props.xScale}/>
        <YAxis height={this.props.height} scale={this.props.yScale} />
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
            fill="#FFC107"
            />
        );
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
      </g>
    );
  }

  private makeHistogram() {
    return d3.histogram()
      .domain(this.props.xScale.domain() as [number, number])
      .thresholds(this.props.xScale.ticks(this.props.bins))
      (DotPlot.getQuantiles(this.props.samples).map(d => d[1]));
  }
}

export default DotPlot;
