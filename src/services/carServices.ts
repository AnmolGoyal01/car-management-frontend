import axiosInstance from "../utils/axiosInstance";
import { extractErrorMessage } from "../utils/errorHandler";
import { ICar, CarApiResponse, CarPayload } from "../types/carTypes";

class CarService {
  private api = "/cars";

  async getAllCars({
    page = 1,
    limit = 10,
    search = "",
    sortBy = "createdAt",
    sortOrder = "desc",
  }: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  }): Promise<CarApiResponse | null> {
    try {
      const params = new URLSearchParams({
        page: `${page}`,
        limit: `${limit}`,
        search,
        sortBy,
        sortOrder,
      });
      const response = await axiosInstance.get<CarApiResponse>(
        `${this.api}?${params.toString()}`
      );
      return response.data;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }

  async getUserCars({
    page = 1,
    limit = 10,
    search = "",
    sortBy = "createdAt",
    sortOrder = "desc",
  }: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  }): Promise<CarApiResponse | null> {
    try {
      const params = new URLSearchParams({
        page: `${page}`,
        limit: `${limit}`,
        search,
        sortBy,
        sortOrder,
      });
      const response = await axiosInstance.get<CarApiResponse>(
        `${this.api}/my-cars?${params.toString()}`
      );
      return response.data;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }

  async getCarById(id: string): Promise<ICar | null> {
    try {
      const response = await axiosInstance.get<ICar>(`${this.api}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }

  async deleteCar(id: string): Promise<boolean> {
    try {
      await axiosInstance.delete(`${this.api}/${id}`);
      return true;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }

  async updateCar(
    id: string,
    {
      title,
      description,
      tags,
      replaceImages = false,
      images,
    }: Partial<CarPayload>
  ): Promise<ICar | null> {
    try {
      // if total no. of images exceeds 10, return an error
      if (replaceImages) {
        const car = await this.getCarById(id);
        if (!car) {
          console.error("Car not found");
          return null;
        }

        const currentImageCount = car.images.length;

        if (images && images.length + currentImageCount > 10) {
          console.error("Error: The total number of images cannot exceed 10");
          return null;
        }
      } else {
        if (images && images.length > 10) {
          console.error("Error: Can't upload more than 10 images");
          return null;
        }
      }

      const formData = new FormData();
      if (title) formData.append("title", title);
      if (description) formData.append("description", description);
      if (tags) formData.append("tags", tags);
      if (replaceImages) formData.append("replaceImages", "true");

      if (images && images.length > 0) {
        images.forEach((image) => formData.append("images", image));
      }

      const response = await axiosInstance.patch<ICar>(
        `${this.api}/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }

  async addCar({
    title,
    description,
    tags,
    images,
  }: CarPayload): Promise<ICar | null> {
    try {
      if (images.length > 10) {
        console.error("Error: Can't upload more than 10 images");
        return null;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      if (tags) formData.append("tags", tags);

      images.forEach((image) => formData.append("images", image));

      const response = await axiosInstance.post<ICar>(
        `${this.api}/add`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }
}

export default new CarService();
