// write product card here
import React from 'react';
import ViewProductButton from '../components/button';

const Productcard = () => {
  // Static dummy data
  const productImage = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ-H2rxYVj5PvtZ56J2Ecoj6tQ1PWYfF7-Zo1qMCS1Nu7_2u4TCbf5ya-cX5Gds92Zi67icw5R7KGGQY4vdxohLr51myuacNIBa8GPLJxnt4TY32DqTWySYRw&usqp=CAE";
  const productName = "Sneakers";
  const productPrice = "₹59.99";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 m-4">
      <img className="w-full h-64 object-cover" src={productImage} alt={productName} />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base mb-4">Price: {productPrice}</p>
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;

