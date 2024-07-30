// import Navbar from "../../globals/components/navbar/Navbar";
// import { deleteCartItem, updateCartItem } from "../../store/cartSlice";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";

// const Cart = () => {
//   const { items } = useAppSelector((state) => state.carts);
//   const dispatch = useAppDispatch();
//   const handleDelete = (productId: string) => {
//     dispatch(deleteCartItem(productId));
//   };
//   const handleUpdate = (productId: string, quantity: number) => {
//     dispatch(updateCartItem(productId, quantity));
//   };

//   const totalItemInCarts = items.reduce(
//     (total, item) => item?.quantity + total,
//     0
//   );
//   const totalPriceInCarts = items.reduce(
//     (total, item) => item?.Product?.productPrice * item?.quantity + total,
//     0
//   );
//   return (
//     <div>
//       <Navbar />
//       <div className="h-screen bg-gray-100 pt-20">
//         <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//         <div className="mx-auto max-w-5xl flex justify-center px-6 md:flex md:space-x-6 xl:px-0">
//           <div className="rounded-lg md:w-2/3">
//             {items?.length > 0 &&
//               items?.map((item) => {
//                 return (
//                   <>
//                     <div
//                       key={item?.Product?.id}
//                       className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
//                     >
//                       <img
//                         src={item?.Product?.productImageUrl}
//                         alt="product-image"
//                         className="w-full rounded-lg sm:w-40"
//                       />
//                       <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                         <div className="mt-5 sm:mt-0">
//                           <h2 className="text-lg font-bold text-gray-900">
//                             {item?.Product?.productName}
//                           </h2>
//                           <p className="mt-1 text-xs text-gray-700">
//                             {item?.Product?.Category?.categoryName}
//                           </p>
//                         </div>
//                         <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                           <div className="flex items-center border-gray-100">
//                             <span
//                               onClick={() =>
//                                 handleUpdate(
//                                   item?.Product?.id,
//                                   item?.quantity - 1
//                                 )
//                               }
//                               className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
//                             >
//                               -
//                             </span>
//                             <input
//                               className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                               type="number"
//                               value={item?.quantity}
//                               min={1}
//                             />
//                             <span
//                               onClick={() =>
//                                 handleUpdate(
//                                   item?.Product?.id,
//                                   item?.quantity + 1
//                                 )
//                               }
//                               className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
//                             >
//                               +
//                             </span>
//                           </div>
//                           <div className="flex items-center space-x-4">
//                             <p className="text-sm">
//                               Rs. {item?.Product?.productPrice}
//                             </p>
//                             <button
//                               onClick={() => handleDelete(item?.Product?.id)}
//                               className="px-2 py-1 rounded-lg border-2 border-gray-400"
//                             >
//                               {" "}
//                               delete
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 );
//               })}
//           </div>
//           <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//             <div className="mb-2 flex justify-between">
//               <p className="text-gray-700">Total Items</p>
//               <p className="text-gray-700">{totalItemInCarts}</p>
//             </div>
//             <div className="mb-2 flex justify-between">
//               <p className="text-gray-700">Total Price</p>
//               <p className="text-gray-700">{totalPriceInCarts}</p>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-gray-700">Shipping</p>
//               <p className="text-gray-700">Rs.200</p>
//             </div>
//             <hr className="my-4" />
//             <div className="flex justify-between">
//               <p className="text-lg font-bold">Total</p>
//               <div>
//                 <p className="mb-1 text-lg font-bold">
//                   {totalPriceInCarts + 200}
//                 </p>
//                 <p className="text-sm text-gray-700">including VAT</p>
//               </div>
//             </div>
//             <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
//               Check out
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { Link } from "react-router-dom";
import Navbar from "../../globals/components/navbar/Navbar";
import { deleteCartItem, updateCartItem } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Cart = () => {
  const { items } = useAppSelector((state) => state.carts);
  const dispatch = useAppDispatch();

  const handleDelete = (productId: string) => {
    dispatch(deleteCartItem(productId));
  };

  const handleUpdate = (productId: string, quantity: number) => {
    dispatch(updateCartItem(productId, quantity));
  };

  const totalItemInCarts = items.reduce(
    (total, item) => item?.quantity + total,
    0
  );

  const totalPriceInCarts = items.reduce(
    (total, item) => item?.Product?.productPrice * item?.quantity + total,
    0
  );

  return (
    <div>
      <Navbar />
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl flex justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {items?.length > 0 &&
              items?.map((item) => (
                <div
                  key={item?.Product?.id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={item?.Product?.productImageUrl}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item?.Product?.productName}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {item?.Product?.Category?.categoryName}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={() =>
                            handleUpdate(
                              item?.Product?.id,
                              Math.max(item?.quantity - 1, 1)
                            )
                          }
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          -
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={item?.quantity}
                          min={1}
                          readOnly
                        />
                        <span
                          onClick={() =>
                            handleUpdate(item?.Product?.id, item?.quantity + 1)
                          }
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          +
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">
                          Rs. {item?.Product?.productPrice}
                        </p>
                        <button
                          onClick={() => handleDelete(item?.Product?.id)}
                          className="px-2 py-1 rounded-lg border-2 border-gray-400"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Total Items</p>
              <p className="text-gray-700">{totalItemInCarts}</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Total Price</p>
              <p className="text-gray-700">Rs. {totalPriceInCarts}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">Rs. 200</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div>
                <p className="mb-1 text-lg font-bold">
                  Rs. {totalPriceInCarts + 200}
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <Link to="/checkout">
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
