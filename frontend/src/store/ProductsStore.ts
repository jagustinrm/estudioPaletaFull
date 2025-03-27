import {create} from 'zustand';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    img: string;
    category: string;
    likes: boolean;
}

export interface ProductsStore {
    products: Product[];
    fetchProducts: () => Promise<void>;
    setProducts: (products: Product[]) => void;
    addProduct: (product: Product) => void;
    deleteProduct: (id: number) => void;
    updateProduct: (id: number, updatedProduct: Product) => void;
  }

export const useProductsStore = create<ProductsStore>((set) => ({
    products: [],
    fetchProducts: async () => {
        try {
          const response = await fetch("http://localhost:3000/api/productos");
          if (!response.ok) throw new Error("Error al obtener productos");
          const data: Product[] = await response.json();
          set({ products: data });
        } catch (error) {
          console.error(error);
        }
      },
    setProducts: (products: Product[]) => set({ products }),
    addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
    deleteProduct: (id) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== id),
        })),
    updateProduct: (id, updatedProduct) =>
        set((state) => ({
            products: state.products.map((product) =>
                product.id === id ? updatedProduct : product
            ),
        })),
}))