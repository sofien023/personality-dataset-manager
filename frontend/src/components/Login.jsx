import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-earth">
      <form className="bg-white p-10 rounded shadow-md w-[400px] space-y-6">
      <input
  className="w-[90%] min-h-[20px] w-fit border-0 bg-transparent border-b  
  m-[10px] p-[10px] block mx-auto focus:outline-none focus:ring-0 focus:border-none"
  type="email"
  placeholder="Email"
/>
<input
  className="w-[90%] min-h-[20px] w-fit border-0 bg-transparent border-b  
  m-[10px] p-[10px] block mx-auto focus:outline-none focus:ring-0 focus:border-none"
  type="password"
  placeholder="Password"
/>

        <button
          type="submit"
        className=" w-[90%] min-h-[20px] rounded-[5px] border-0 w-fit m-[10px] p-[10px] mx-auto block"
        >
          Login
        </button>

        <div className="text-base text-center p-[10px] ">
          <Link to="/forgot-password" className="text-forest no-underline">
            Forgot Password?
          </Link>
        </div>

        <div className="text-base text-center p-[6px]">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-forest no-underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
