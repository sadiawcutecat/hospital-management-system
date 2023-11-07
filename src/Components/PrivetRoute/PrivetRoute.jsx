import { useContext } from "react";
import { AuthContext } from "../../app/(with-navbar)/context/AuthContext";
import { useRouter } from "next/navigation";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  //   if (loading) {
  //     return "loading...";
  //   }
  //   if (!user) {
  //     useRouter("/login");
  //   } else {
  // }
  return children;
};

export default PrivetRoute;
