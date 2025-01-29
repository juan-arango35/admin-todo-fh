import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cookiecart = JSON.parse((getCookie("cart") as string) ?? "{}"); // busca la cookie
    return cookiecart;
  }
  return {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    cookieCart[id]++;
  } else {
    cookieCart[id] = 1;
  }
  setCookie("cart", JSON.stringify(cookieCart));
};


export const removeProductFromCart =(id: string)=>{
    
}