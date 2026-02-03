export interface Product {
  id: number;
  productName: string;
  amount: number;
  image: string;
}

export interface ProductsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    products: Product[];
  };
  timestamp: string;
}
