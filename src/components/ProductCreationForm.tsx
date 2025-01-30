import { useState } from "react";
import { CarPayload } from "../types/carTypes";

interface ProductCreationFormProps {
  onSubmit: (car: CarPayload) => void;
  onCancel: () => void;
}

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<CarPayload>({
    title: "",
    description: "",
    tags: "",
    images: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let totalFiles = 0;
      const fileArray = Array.from(e.target.files).map((file) => {
        totalFiles++;
        return file;
      });
      if (totalFiles > 10) {
        alert("You can only upload a maximum of 10 images");
        return;
      }
      setFormData({ ...formData, images: fileArray });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add a New Car</h2>

      <input
        type="text"
        name="title"
        placeholder="Car Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <input
        type="text"
        name="tags"
        placeholder="Tags (comma-separated)"
        value={formData.tags}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
        required
      />

      <div className="flex space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductCreationForm;
