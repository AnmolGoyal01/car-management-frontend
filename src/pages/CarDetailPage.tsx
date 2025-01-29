import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ICar } from "../types/carTypes";
import CarCard from "../components/carComponents/CarCard";
import { useDispatch, useSelector } from "react-redux";
import CarActions from "../redux/car/carActions";
import { RootState } from "../redux/store";

const CarPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const carData = useSelector((state: RootState) => state.cars);
  const userData = useSelector((state: RootState) => state.user);
  const [car, setCar] = useState<ICar | null>(null);
  const [loading, setLoading] = useState(true);

  const loadCar = async () => {
    if (carId) {
      let carFound = false;
      carData?.allCars?.cars?.forEach((car) => {
        if (car._id === carId) {
          setCar(car);
          carFound = true;
        }
      });
      if (!carFound) {
        const car = await CarActions.getCarById(carId)(dispatch);
        if (car) {
          setCar(car);
        }
      }
    }
  };

  useEffect(() => {
    loadCar();
    setLoading(false);
  }, [carId, dispatch]);

  const handleEditClick = () => {
    if (carId) {
      navigate(`/car/edit/${carId}`);
    }
  };

  const handleDeleteClick = async () => {
    if (carId) {
      const confirmed = window.confirm(
        "Are you sure you want to delete this car?"
      );
      if (confirmed) {
        await CarActions.deleteCar(carId)(dispatch);
        navigate("/cars");
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!car) return <div>Car not found</div>;

  return (
    <div className="p-6">
      <div className="flex flex-col justify-center mx-auto">
        <div className="flex justify-center mx-auto">
          <CarCard car={car} />
        </div>
        <div className="flex items-center justify-center">
          {userData?.user?.data?._id === car?.owner?._id && (
            <div className="mt-4 flex space-x-4">
              <button
                onClick={handleEditClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Edit Car
              </button>
              <button
                onClick={handleDeleteClick}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete Car
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarPage;
