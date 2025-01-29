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
  console.log(cookieCart);
  if (cookieCart[id]) {
    cookieCart[id]++;
  } else {
    cookieCart[id] = 1;
  }
  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  console.log(cookieCart);

  delete cookieCart[id];

  setCookie("cart", JSON.stringify(cookieCart));
};

//para eliminar uno a uno los elementos
export const removeOneProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    cookieCart[id]--;
  }
  if (cookieCart[id] === 0) {
    delete cookieCart[id];
  }
  setCookie("cart", JSON.stringify(cookieCart));
};
