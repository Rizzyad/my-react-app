import Button from "../Elements/Button/Button";

const CartProduct = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
        {children}
      </div>
    </>
  );
};

export default CartProduct;

const Body = ({title, children}) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = ({price}) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600">Add To Cart</Button>
    </div>
  );
};

const Header = ({image}) => {
  return (
    <a href="#" alt="product">
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg w-full"
      />
    </a>
  );
};

CartProduct.Header = Header;
CartProduct.Body = Body;
CartProduct.Footer = Footer;
