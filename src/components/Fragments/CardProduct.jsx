import Button from "../Elements/Button/Button";

const CardProduct = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-4 my-3 flex flex-col justify-between">
        {children}
      </div>
    </>
  );
};

export default CardProduct;

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

const Footer = ({price, handleAddToCart, id}) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">Rp {price.toLocaleString("id-ID", {styles: "currency", currency: "IDR"})}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>Add To Cart</Button>
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

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
