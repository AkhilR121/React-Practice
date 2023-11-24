import Map from "@arcgis/core/Map";

import Graphic from "@arcgis/core/Graphic";
import "@arcgis/core/assets/esri/themes/dark/main.css";
import Point from "@arcgis/core/geometry/Point";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
// import Popup from "@arcgis/core/widgets/Popup";

import MapView from "@arcgis/core/views/MapView";
import { useEffect, useRef } from "react";

export function ArcGisPractice() {
  const tollLocation = [
    {
      id: 1,
      long: -95.47,
      lat: 29.9372,
    },
    {
      id: 2,
      long: -95.536317,
      lat: 29.932441,
    },
    {
      id: 3,
      long: -95.555007,
      lat: 29.921779,
    },
  ];

  const viewMap = useRef(null);

  useEffect(() => {
    const myMap = new Map({
      basemap: "topo",
    });

    const view = new MapView({
      map: myMap,
      container: viewMap.current as any,
      zoom: 10,
      center: [-95.368318, 29.758017],
      popupEnabled: true,
    });

    const graphicsLayer = new GraphicsLayer();
    view.map.add(graphicsLayer);

    const markerStyling = new SimpleMarkerSymbol({
      color: "purple",
      size: 7,
    });
    const template = {
      title: "Technoidnetity",
    };

    tollLocation.map(loc => {
      const point = new Point({
        longitude: loc.long,
        latitude: loc.lat,
      });

      const tollPoint = new Graphic({
        geometry: point,
        symbol: markerStyling,
        popupTemplate: template,
      });
      graphicsLayer.add(tollPoint);
    });

    view.when(() => {
      view.on("click", event => {
        view.popup.open({
          location: event.mapPoint,
        });
      });
    });

    return () => {
      view?.destroy();
    };
  }, []);

  return <div ref={viewMap} className="h-[80vh] w-full border-black p-3"></div>;
}
