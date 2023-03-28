import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import nigeria from "../nigeria.json"; // import the Nigeria TopoJSON data
import { useEffect } from "react";

export default function Nigerianmap () {
  const [data, setData] = useState([]);

  useEffect(() => {
    // load your data here
    // setData(myData);
  }, []);

  const handleGeographyClick = (geography) => {
    console.log(geography);
  };

  return (
    <div className="w-full h-64">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 700 }}
        height={200}
      >
        <Geographies geography={nigeria}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleGeographyClick(geo)}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

