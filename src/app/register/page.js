import React from 'react';

const Register = () => {
    return (
      <div className=' pt-20  '>
   

      <h3 className='text-2xl font-bold mb-5'>Create an account</h3>
      <form  className="w-full md:w-[570px] mt-15 mb-10  bg-white rounded-lg text-black">
      <div className="form-control">

        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input  type="text" name='name' placeholder="Name" className="input input-bordered w-full" required />
      </div>
         <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">PhotoURL</span>
        </label>
        <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />

      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

      </div>
         <div className="form-control">
             <label className="flex gap-4 cursor-pointer mt-4">
                 <input type="checkbox" className="checkbox" />
                 <span className="label-text">Remember me</span>
             </label>
         </div>
         <div className="form-control">
        <label className="flex gap-4 cursor-pointer mt-4">
          <input type="checkbox" className="checkbox" required />
          <span className="label-text">Accept terms & conditions</span>
        </label>
      </div>
      <div className="form-control mt-6 mb-3">
        <button type="submit" value="register" className="btn btn-warning">Create an account</button>
      </div>
      <p className="text-center">
          Already have an account?{' '}
          <a href="/login" className="text-warning underline">
            Login
          </a>
        </p>
      
     </form>
     
    </div>
    );
};

export default Register;