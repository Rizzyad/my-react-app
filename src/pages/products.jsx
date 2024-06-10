import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useNavigate } from "react-router-dom";
import Counter from "../components/Fragments/Counter";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 1000000,
    image: "../public/shoes-01.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            cumque tempore similique quia inventore placeat facere consectetur
            maiores fuga sequi nobis nihil asperiores, dolorem soluta, iste quod
            vitae ad doloremque.`,
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: 500000,
    image: "../public/shoes-01.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    title: "Sepatu Adadong",
    price: 2000000,
    image: "../public/shoes-01.jpg",
    description: `Ini adalah sepatu baru dari brand adadong`,
  },
];

const loginData = JSON.parse(localStorage.getItem("login")) || [];
const email = loginData && loginData.length > 0 ? loginData[0].email : "";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
      )
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    const loginData = JSON.parse(localStorage.getItem("login")) || [];
    if (loginData.length > 1) {
      loginData.shift();
      localStorage.setItem("login", JSON.stringify(loginData));
    } else {
      localStorage.removeItem("login");
    }
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="bg-red-600 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-5/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                id={product.id}
                price={product.price}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-3/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {product.price *
                        item.qty.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
