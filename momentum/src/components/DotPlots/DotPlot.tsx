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
  private static getSamples(numSamples: number) {
    const start = 1/numSamples / 2;
    const stop = 1 - 1/numSamples / 2;
    const step = (stop - start) / (numSamples - 1);
    return _.range(start, stop + step, step);
  }

  private static getQuantiles(numSamples: number) {
    return DotPlot.getSamples(numSamples).map(s => [s, jStat.normal.inv(s, 0, 1)]);
  }

  public render() {
    return (
      <g transform={'translate(' + this.props.translate.x + ',' + this.props.translate.y + ')'}>
        <XAxis width={this.props.width} height={this.props.height} scale={this.props.xScale}/>
        <YAxis height={this.props.height} scale={this.props.yScale} />

      </g>
    );
  }

  private makeHistogram() {
    return d3.histogram()
      .domain(this.props.xScale.domain() as [number, number])
      .thresholds(this.props.xScale.ticks(this.props.bins));
      // .value(function(d) { return d.Value;} )
  }
}

export default DotPlot;
