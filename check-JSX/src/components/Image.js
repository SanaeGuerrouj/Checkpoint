import products from "../product";

function Image() {
  return (
    <div className="">
      <img className="h-64 w-64 object-cover rounded" src={products[0].image} alt="Product 1" />
     </div>
  );
}

export default Image;
