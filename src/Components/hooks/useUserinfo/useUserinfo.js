import { AuthContext } from "@/app/(with-navbar)/context/AuthContext";
import { useContext, useEffect, useState } from "react";


const useUserinfo = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState({});
  console.log(user);

  useEffect(() => {
    fetch(`/api/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUserRole({ data });
      });
  }, [user]);

  return userRole;
};

export default useUserinfo;
