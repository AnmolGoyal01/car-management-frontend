export interface ICar {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  createdAt: string;
  owner: {
    _id: string;
    userName: string;
    fullName: string;
  };
}

export interface CarApiResponse {
  cars: ICar[];
  totalCars: number;
  totalPages: number;
  currentPage: number;
}

export interface CarPayload {
  title: string;
  description: string;
  tags?: string;
  images: File[];
  replaceImages?: boolean;
}
