import { ICar } from "../../types/carTypes";

interface OwnerInfoProps {
  owner: ICar["owner"];
}

const OwnerInfo = ({ owner }: OwnerInfoProps) => {
  return (
    <div className="mt-4 text-gray-700">
      <p>
        <strong>Owner: </strong>
        <span className="text-blue-500">{owner?.fullName}</span> (
        <span className="text-blue-300">{owner?.userName}</span>)
      </p>
    </div>
  );
};

export default OwnerInfo;
