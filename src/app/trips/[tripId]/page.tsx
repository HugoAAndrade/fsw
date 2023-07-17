import { prisma } from "@/lib/prisma";
import TripHeader from "@/app/trips/[tripId]/components/TripHeader";
import TripReservation from "@/app/trips/[tripId]/components/TripReservation";
import TripDescription from "@/app/trips/[tripId]/components/TripDescription";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });
  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation trip={trip} />
      <TripDescription description={trip.description} />
    </div>
  );
};

export default TripDetails;
