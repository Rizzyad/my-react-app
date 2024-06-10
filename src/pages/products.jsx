import CartProduct from "../components/Fragments/CartProduct";

const ProductPage = () => {
  return (
    <>
        <div className="flex justify-center py-5">
            <CartProduct>
                <CartProduct.Header image="../public/shoes-01.jpg"/>
                <CartProduct.Body title={"Sepatu Baru"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, cumque tempore similique quia inventore placeat facere consectetur maiores fuga sequi nobis nihil asperiores, dolorem soluta, iste quod vitae ad doloremque.
                </CartProduct.Body>
                <CartProduct.Footer price={"Rp 1.000.000"}/>
            </CartProduct>
            <CartProduct>
                <CartProduct.Header image="../public/shoes-01.jpg"/>
                <CartProduct.Body title={"Sepatu Baru"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, cumque tempore similique quia inventore placeat facere consectetur maiores fuga sequi nobis nihil asperiores, dolorem soluta, iste quod vitae ad doloremque.
                </CartProduct.Body>
                <CartProduct.Footer price={"Rp 1.000.000"}/>
            </CartProduct>
        </div>
    </>
  );
};

export default ProductPage
