import Button from "../components/Elements/Button/Button";
import CartProduct from "../components/Fragments/CartProduct";
import { useNavigate } from "react-router-dom";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "../public/shoes-01.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
            cumque tempore similique quia inventore placeat facere consectetur
            maiores fuga sequi nobis nihil asperiores, dolorem soluta, iste quod
            vitae ad doloremque.`,
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: "Rp 500.000",
    image: "../public/shoes-01.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    title: "Sepatu Adadong",
    price: "Rp 2.000.000",
    image: "../public/shoes-01.jpg",
    description: `Ini adalah sepatu baru dari brand adadong`,
  },
];

const loginData = JSON.parse(localStorage.getItem("login")) || [];
const email = loginData && loginData.length > 0 ? loginData[0].email : "";

const ProductPage = () => {
  const navigate = useNavigate();

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
        {products.map((product) => (
          <CartProduct key={product.id}>
            <CartProduct.Header image={product.image} />
            <CartProduct.Body title={product.title}>
              {product.description}
            </CartProduct.Body>
            <CartProduct.Footer price={product.price} />
          </CartProduct>
        ))}
      </div>
      <div className="flex w-100 justify-center">
        <Counter />
      </div>
    </>
  );
};

export default ProductPage;
