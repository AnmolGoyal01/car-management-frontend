import { useNavigate, useParams } from "react-router-dom";
import EditProductForm from "../components/EditProductForm";
import { useDispatch, useSelector } from "react-redux";
import CarActions from "../redux/car/carActions";
import { CarPayload } from "../types/carTypes";
import { RootState } from "../redux/store";

const EditProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!id) {
    navigate("/");
  }
  const car = useSelector((state: RootState) =>
    state.cars?.userCars?.cars.find((c) => c._id === id)
  );
  if (!car) {
    return <div className="p-6 text-center">Car not found</div>;
  }

  const handleSubmit = async (updatedCar: CarPayload) => {
    await CarActions.updateCar(id!, updatedCar)(dispatch);
    navigate("/all-car");
  };

  const handleCancel = () => {
    navigate("/all-car");
  };

  if (!car) {
    return <div className="p-6 text-center">Car not found</div>;
  }

  return (
    <div className="p-6 flex justify-center items-center">
      <div className="">
        <EditProductForm
          initialData={car}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default EditProductPage;
