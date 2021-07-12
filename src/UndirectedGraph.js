// Model d3 as a component

import { useD3 } from './hooks/useD3'
import React from 'react';
import * as d3 from 'd3';
// import { svg } from 'd3';

function UndirectedGraph({ data }) {

  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove();

      const drag = simulation => {
        function dragstarted(event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(event, d) {
          d.fx = event.x;
          d.fy = event.y;
        }

        function dragended(event, d) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }

        return d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
      }

      var color = d3.scaleOrdinal()
        .domain([0, 1])
        .range(["green", "red"])

      const height = 1080
      const width = 1920

      const links = data.links.map(d => Object.create(d));
      const nodes = data.nodes.map(d => Object.create(d));

      const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.nodeId).strength(d => d.value * 0.04))
        .force("charge", d3.forceManyBody().strength(-100))
        .force("x", d3.forceX())
        .force("y", d3.forceY());

      svg.attr("viewBox", [-width / 2, -height / 2, width, height]);

      const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.7)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", d => d.value ** -1.5);

      const node = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", 12)
        .attr("fill", d => color(d.change))
        .attr("opacity", 1)
        .attr("id", d => d.nodeId)
        .call(drag(simulation))
        .on("mouseover.fade", fade(0.1, 0.1))
        .on("mouseout.fade", fade(1, 0.7));
        
        node.append("title")
        .text(d => d.nodeId + "\n" + d.group);

      const linkedById = {};
      data.links.forEach(d => {
        linkedById[`${d.source},${d.target}`] = 1;
      });

      function isConnected(a, b) {
        return linkedById[`${a},${b}`] || linkedById[`${b},${a}`] || a === b;
      }

      function fade(opacity1, opacity2) {
        return d => {
          node.style('stroke-opacity', function (o) {
            const thisOpacity = isConnected(d.target.id, o.nodeId) ? 1 : opacity1;
            this.setAttribute('fill-opacity', thisOpacity);
            return thisOpacity;
          });

          link.style('stroke-opacity', o => (nodes[o.source.index].nodeId === d.target.id || nodes[o.target.index].nodeId === d.target.id ? 1 : opacity2));
        };
      }

      simulation.on("tick", () => {
        link
          .attr("x1", d => d.source.x = Math.max(-width / 2, Math.min(width / 2, d.source.x)))
          .attr("y1", d => d.source.y = Math.max(-height / 2, Math.min(height / 2, d.source.y)))
          .attr("x2", d => d.target.x = Math.max(-width / 2, Math.min(width / 2, d.target.x)))
          .attr("y2", d => d.target.y = Math.max(-height / 2, Math.min(height / 2, d.target.y)));

        node
          .attr("cx", d => d.x = Math.max(-width / 2, Math.min(width / 2, d.x)))
          .attr("cy", d => d.y = Math.max(-height / 2, Math.min(height / 2, d.y)));
      });
    }
  );

  // Render svg as a plot area
  return (
      <svg
        ref={ref}
        style={{
          height: "80%",
          width: "80%",
          marginRight: "0px",
          marginLeft: "0px",
        }}
      >
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
  );
}

export default UndirectedGraph;