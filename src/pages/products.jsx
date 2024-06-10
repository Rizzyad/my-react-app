import CartProduct from "../components/Fragments/CartProduct";

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

const ProductPage = () => {
  return (
    <>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CartProduct key={product.id}>
            <CartProduct.Header image={product.image} />
            <CartProduct.Body title={product.title} >
                {product.description}
            </CartProduct.Body>
            <CartProduct.Footer price={product.price} />
          </CartProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
