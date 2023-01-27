import { type SurfSpot } from "@prisma/client";
import { MapMarker } from "./MapMarker/MapMarker";

interface Props {
  surfSpots: SurfSpot[];
}

export const MapMarkers = ({ surfSpots }: Props) => {
  return (
    <>
      {surfSpots.map((surfSpot) => (
        <MapMarker surfSpot={surfSpot} key={surfSpot.name} />
      ))}
    </>
  );
};
