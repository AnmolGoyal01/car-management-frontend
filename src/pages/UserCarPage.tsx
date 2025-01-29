import { useState, useEffect } from "react";
import { ICar } from "../types/carTypes";
import CarCard from "../components/carComponents/CarCard";
import CarActions from "../redux/car/carActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const UserCarPage = () => {
  const navigate = useNavigate();
  const carData = useSelector((state: RootState) => state.cars);
  const [cars, setCars] = useState<ICar[]>([]);
  const dispatch = useDispatch();

  const loadCars = async () => {
    await CarActions.getUserCars({})(dispatch);
  };

  useEffect(() => {
    loadCars();
  }, []);
  useEffect(() => {
    setCars(carData.userCars.cars);
  }, [carData.userCars]);

  const handleCarClick = (id: string) => {
    navigate(`/car/${id}`);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {cars?.map((car) => (
        <div
          className="hover:cursor-pointer"
          key={car._id}
          onClick={() => {
            handleCarClick(car._id);
          }}
        >
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
};

export default UserCarPage;
