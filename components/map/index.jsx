import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-15.0, -52.0, 0],
        center: [-5, -3],
        scale: 1200,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#390000"
        stroke="#b76f02"
        strokeWidth={0.4}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Paris"}
        </text>
      </Annotation>
      <Annotation
        subject={[21.01178, 52.22977]}
        dx={20}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="18"
          y="-10"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="white"
        >
          {"Warsaw"}
        </text>
      </Annotation>
      <Annotation
        subject={[28.01178, 41.22977]}
        dx={-50}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"I live in Istanbul"}
        </text>
      </Annotation>
      <Annotation
        subject={[-4.01178, 41.22977]}
        dx={-50}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Madrid"}
        </text>
      </Annotation>
      <Annotation
        subject={[12.01178, 52.22977]}
        dx={-0}
        dy={-50}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="18"
          y="-10"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="white"
        >
          {"Berlin"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
