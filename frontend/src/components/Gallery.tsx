import { useEffect } from "react";
import { useProductsStore } from "../store/ProductsStore";

export default function Gallery() {
    const { products, fetchProducts } = useProductsStore();
    useEffect(() => {
        fetchProducts(); // Llamamos a la API al montar el componente
      }, []);

    return (
        <section  className="flex flex-col justify-center items-center products-section">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-6xl">
                {products.map((product) => (
                    <div key={product.id} className=" p-4 rounded-lg flex flex-col">
                    <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                    <h2>{product.name}</h2>
                    <div> 
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="mt-2 text-xl font-bold">${product.price}</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    )
}