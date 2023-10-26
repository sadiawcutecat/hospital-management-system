"use client";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";

const SocialLogin = () => {
  const router = useRouter();
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      router.push("/");
    });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
