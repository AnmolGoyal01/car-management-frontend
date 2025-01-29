interface CarTagProps {
    tag: string;
  }
  
  const CarTag = ({ tag }: CarTagProps) => {
    return (
      <span className="bg-gray-200 text-gray-800 text-sm py-1 px-3 rounded-full mr-2 mb-2">
        {tag}
      </span>
    );
  };
  
  export default CarTag;
  