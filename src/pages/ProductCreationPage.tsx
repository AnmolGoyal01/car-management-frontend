import { useNavigate } from "react-router-dom";
import ProductCreationForm from "../components/ProductCreationForm";
import { useDispatch } from "react-redux";
import CarActions from "../redux/car/carActions";
import { CarPayload } from "../types/carTypes";

const ProductCreationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (car: CarPayload) => {
    await CarActions?.addCar(car)(dispatch);
    navigate("/cars");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="p-6 flex justify-center items-center">
      <div className="">
      <ProductCreationForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default ProductCreationPage;
