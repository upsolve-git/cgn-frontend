import { useState, useEffect } from "react";
import { Product } from "../../interfaces/Product";
import { deleteFromUsersCartReq, getOrdersReq, getUserDefaultAddressReq, getUsersCartReq, placeOrderReq, updateUsersCartReq } from "../../services/login";
import { Cart } from "../../interfaces/Cart";
import { Address } from "../../interfaces/Address";
import { Order } from "../../interfaces/Order";
import { jsPDF } from 'jspdf';


export const useCartPage = () => {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
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
  const stateDropdownItems = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Quebec", "Price Edward Island", "Saskatchewan", "Yukon"]
  const updateTaxPercent = (state : string) : number => {
    let value: number;
    switch (state) {
      case "Alberta":
        value = 5;
        break;
      case "British Columbia":
        value = 12;
        break;
      case "Manitoba":
        value = 12;
        break;
      case "New Brunswick":
        value = 15;
        break;
      case "Newfoundland and Labrador":
        value = 15;
        break;
      case "Northwest Territories":
        value = 5;
        break;
      case "Nova Scotia":
        value = 15;
        break;
      case "Nunavut":
        value = 5;
        break;
      case "Ontario":
        value = 13;
        break;
      case "Quebec":
        value = 14.975;
        break;
      case "Price Edward Island":
        value = 15;
        break;
      case "Saskatchewan":
        value = 11;
        break;
      case "Yukon":
        value = 5;
        break;
      default:
        value = 0; // Default value if province not found
    }
    return value;
  }
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
        console.log("orders",ordersRes)
        setOrders(ordersRes.data);
      } catch (err) {
        console.error("Error fetching cart or address:", err);
      }
    };

    fetchCartAndAddress(); // Call the async function
  }, []); // Empty dependency array to ensure this only runs on mount

  const handleAddToCart = async (product: Product, quantity: number, color_id: number) => {
    try {
      const res = await updateUsersCartReq(product.product_id, quantity, color_id);
      console.log("added to cart", res);
    } catch (err) {
      console.error("Error adding product to cart:", err);
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

  const handlePlaceOrder = async (orderId : string) => {
    console.log("address changed", address);
    try {
      const res = await placeOrderReq(orderId, address, cartItems)
      console.log("added to cart", res);
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  const handleGetOrders = async() => {
    console.log(orders)
  }

  const generatePDF = (subtotal: number, discount:number, tax : number, deliveryFee : number, ) => {
    const doc = new jsPDF();

    // Set font size and add invoice header
    doc.setFontSize(18);
    doc.text('Invoice', 105, 20, { align: 'center' });

    // Add some details like company name, address etc.
    
    doc.setFontSize(12);
    doc.text('Canadian Gel Nails', 20, 30);
    doc.text('PO Box 2900 SUDBURY PO A, ON, P3A 5J3,Canada', 20, 35);
    doc.text('Email: dev.cgnails@gmail.com', 20, 45);
    // doc.text('Phone: (123) 456-7890', 20, 50);

    // Add a horizontal line separator
    doc.line(20, 55, 190, 55);

    doc.setFontSize(14);
    doc.text('Item', 20, 70);
    doc.text('Price', 170, 70, { align: 'right' });

    for (let i = 0; i< cartItems.length; i++) {
      doc.text(cartItems[i].name + "   x " + cartItems[i].price, 20, 70)
      doc.text((cartItems[i].quantity * cartItems[i].price).toString(), 170, 70, { align: 'right' })
    }

    doc.line(20, 55, 290, 55);

    // Add subtotal, discount, tax, delivery fee, and total
    doc.setFontSize(14);
    doc.text('Subtotal', 20, 70);
    doc.text('$'+ subtotal, 170, 70, { align: 'right' });

    doc.text('Discount', 20, 80);
    doc.text('-$' + discount, 170, 80, { align: 'right' });

    doc.text('Tax', 20, 90);
    doc.text('$' + tax, 170, 90, { align: 'right' });

    doc.text('Delivery Fee', 20, 100);
    doc.text('$' + deliveryFee, 170, 100, { align: 'right' });

    // Add another horizontal line separator
    doc.line(20, 110, 190, 110);

    doc.text('Total', 20, 120);
    doc.text('$' + (subtotal - discount + tax + discount), 170, 120, { align: 'right' });

    // Save the PDF
    doc.save('invoice.pdf');
    // const pdfBlob = doc.output('blob');
  };

  
  return {
    handleAddToCart,
    handleDeleteFromCart,
    cartItems,
    address,
    setAddress,
    handlePlaceOrder,
    handleGetOrders,
    orders,
    stateDropdownItems,
    updateTaxPercent,
    generatePDF
  };
};
