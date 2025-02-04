import { Product } from "@/products/data/products";
import { cookies } from "next/headers";
import { products } from "../../../products/data/products";
import { ItemCard } from "@/shopping-cart/components/ItemCard";

export const metadata = {
  title: "Carrito de Compras",
  description: "Seo Title",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

//convertir a array
const getProductsIncart = (cart: { [id: string]: number }): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];
  for (const id of Object.keys(cart)) {
    const product = products.find((prod) => prod.id === id);
    if (product) {
      productsInCart.push({ product: product, quantity: cart[id] });
    }
  }
  return productsInCart;
};

const CartPage = async () => {
  const cookiesStore = await cookies();
  const cart = (await JSON.parse(cookiesStore.get("cart")?.value ?? "{}")) as {
    [id: string]: number;
  };
  const productsInCart = getProductsIncart(cart);
  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:8/12">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
