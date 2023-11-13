"use client";
import useAuth from "../hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

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
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-sm btn-circle bg-white text-xl"
        >
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
