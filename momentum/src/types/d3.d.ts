export interface d3Node {
  // svg force simulation data
  x?: number,
  y?: number,

  id: string,
  group: number
}

export interface d3Link {
  // svg force simulation data
  source?: {x: number, y: number},
  target?: {x: number, y: number},

  from: string,
  to: string,
  value: number
}

export interface d3Graph {
  nodes: d3Node[],
  links: d3Link[]
}
