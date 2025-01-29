import { ICar } from "../../types/carTypes";
import OwnerInfo from "./OwnerInfo";
import CarTag from "./CarTag";

interface CarDetailsProps {
  car: ICar;
}

const CarDetails = ({ car }: CarDetailsProps) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">{car.title}</h3>
      <p className="text-gray-600 mt-2">{car.description}</p>
      <div className="flex flex-wrap mt-2">
        {car?.tags?.map((tag, index) => (
          <CarTag key={index} tag={tag} />
        ))}
      </div>
      <OwnerInfo owner={car.owner} />
    </div>
  );
};

export default CarDetails;
