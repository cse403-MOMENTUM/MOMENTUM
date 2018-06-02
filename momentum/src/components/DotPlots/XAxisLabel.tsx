import * as React from 'react';

interface Props {
  width: number;
  height: number;
}

class XAxisLabel extends React.Component<Props, {}> {
  public render() {
    return (
      <g className="XAxisLabel" transform={'translate(' + (this.props.width / 2) + ',' + (this.props.height + 33) + ')'}>
        <text textAnchor="middle">
        Projected Hours Until Completion
        </text>
      </g>

    );
  }
}

export default XAxisLabel;
