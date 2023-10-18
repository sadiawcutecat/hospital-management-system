import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";



const Login = () => {
//    const {user,googleSignIn}= useContext(AuthContext);

    // const handleGoogleSignIn =async() => {
    //    try{
    //     await googleSignIn();
    //    }
    //    catch(error){
    //     console.log(error);
    //    }
    // }



    return (
        <div className='flex flex-col md:flex-row sm:flex-col justify-content-center align-items-center  '>


            <form className="w-full md:w-[570px] mt-15 mb-10 p-10  bg-white rounded-lg text-black">
                <h3 className='text-2xl font-bold mb-5'>Login</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href='#' className="underline text-error" >Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="flex gap-4 cursor-pointer mt-4">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text">Remember me</span>
                    </label>
                </div>
                <div className="form-control mt-6 mb-3">
                    <button className="btn btn-warning">Login</button>
                </div>
                {/* {error && <p className='text-center text-error mb-2'>{error}</p>} */}
                <p className="text-center">
                    Don't have an account?{' '}
                    <a href="/register">
                        <a className="text-warning underline">Create an account</a>
                    </a>
                </p>
                <p className='text-center my-2'>__________or__________</p>
                <div className=" social-button-container grid grid-rows-2 justify-items-center w-50 ">
                    <div className="">
                        <FaGoogle />
                    </div>

                </div>

            </form>
            <div className="text-blue-300">

            </div>
        </div>
    );
};

export default Login;