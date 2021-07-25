// import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";



const Providers = ({ children }) => {
  return (
    // <AuthProvider>
      <CartProvider>{children}</CartProvider>
    // </AuthProvider>
  );
};

export default Providers;
