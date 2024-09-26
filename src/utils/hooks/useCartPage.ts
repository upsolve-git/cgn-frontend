import { useState, useEffect } from "react";
import { Product } from "../../interfaces/Product";
import { deleteFromUsersCartReq, getOrdersReq, getUserDefaultAddressReq, getUsersCartReq, placeOrderReq, updateUsersCartReq } from "../../services/login";
import { Cart } from "../../interfaces/Cart";
import { Address } from "../../interfaces/Address";
import { Order } from "../../interfaces/Order";
import { getAuth } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const useCartPage = () => {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const navigate = useNavigate()

  const defaultAddress: Address = {
    address_id: 0,
    full_name: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    mobile: '',
    user_id: 0,
    default: false,
  };

  const [address, setAddress] = useState<Address>(defaultAddress);
  const [orders, setOrders] = useState<Order[]>([])

  // Single useEffect with async/await for both calls
  useEffect(() => {
    const fetchCartAndAddress = async () => {
      try {
        // Fetch cart items
        const cartRes = await getUsersCartReq(1);
        setCartItems(cartRes.data);

        // Fetch user default address
        const addressRes = await getUserDefaultAddressReq();
        setAddress(addressRes.data ? addressRes.data : defaultAddress);

        const ordersRes = await getOrdersReq();
        console.log("orders", ordersRes)
        setOrders(ordersRes.data);
      } catch (err) {
        console.error("Error fetching cart or address:", err);
      }
    };

    fetchCartAndAddress(); // Call the async function
  }, []); // Empty dependency array to ensure this only runs on mount

  const handleAddToCart = async (product: Product, quantity: number, color_id: number) => {
    try{
      const authRes = await getAuth()
      if(authRes.status==200){
        console.log('yes authed');
        try {
            const res = await updateUsersCartReq(product.product_id, quantity, color_id);
            console.log("added to cart", res);
            window.alert('Cart items added')
        } catch (err) {
          console.error("Error adding product to cart:", err);
        }
      }
    }catch(err){
      console.log('were here');
      navigate('/auth/sign-in')
    }
  };

  const handleDeleteFromCart = async (product_id: number, color_id: number) => {
    try {
      const res = await deleteFromUsersCartReq(product_id, color_id);
      console.log("deleted from cart", res);
    } catch (err) {
      console.error("Error deleting product from cart:", err);
    }
  };

  const handlePlaceOrder = async (orderId: string) => {
    console.log("address changed", address);
    try {
      const res = await placeOrderReq(orderId, address, cartItems)
      console.log("added to cart", res);
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  const handleGetOrders = async () => {
    console.log(orders)
  }


  return {
    handleAddToCart,
    handleDeleteFromCart,
    cartItems,
    address,
    setAddress,
    handlePlaceOrder,
    handleGetOrders,
    orders
  };
};
