import { useEffect } from "react";
import { useProductsStore } from "../store/ProductsStore";

export default function Gallery() {
    const { products, fetchProducts } = useProductsStore();
    useEffect(() => {
        fetchProducts(); // Llamamos a la API al montar el componente
      }, []);

    return (
        <section>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                    <img src={product.img} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}