import { ICar } from "../../types/carTypes";
import ImageCarousel from "./ImageCarousel";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: ICar;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <ImageCarousel images={car?.images} />
      <CarDetails car={car} />
    </div>
  );
};

export default CarCard;
