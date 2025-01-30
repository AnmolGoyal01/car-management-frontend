import { useState, useEffect } from "react";
import { ICar } from "../types/carTypes";
import CarCard from "../components/carComponents/CarCard";
import CarActions from "../redux/car/carActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const AllCarPage = () => {
  const navigate = useNavigate();
  const carData = useSelector((state: RootState) => state.cars);
  const dispatch = useDispatch();
  const [cars, setCars] = useState<ICar[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const loadCars = async () => {
    await CarActions.getAllCars({})(dispatch);
  };

  useEffect(() => {
    loadCars();
    setCars(carData.allCars.cars);
  }, []);
  useEffect(() => {
    setCars(carData.allCars.cars);
  }, [carData.allCars]);

  const handleCarClick = (e: any, id: string) => {
    if (e.target.tagName === "BUTTON") return;
    navigate(`/car/${id}`);
  };

  const filterCars = async () => {
    await CarActions.getAllCars({ search: searchQuery })(dispatch);
    setCars(carData.allCars.cars);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-full mx-2 text-center">
          <input
            type="text"
            placeholder="Search by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 mb-6 border rounded"
          />
        </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => filterCars()}
          >
            Search
          </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars?.length > 0 ? (
          cars.map((car) => (
            <div
              className="hover:cursor-pointer"
              key={car._id}
              onClick={(e) => handleCarClick(e, car._id)}
            >
              <CarCard car={car} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No cars found</p>
        )}
      </div>
    </div>
  );
};

export default AllCarPage;
