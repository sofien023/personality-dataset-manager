import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-earth">
      <form className="p-10 rounded shadow-md w-[250px] space-y-6">
        <legend className='bg-white'>
        <input
        className=" w-[90%] min-h-[20px] border-0 bg-transparent border-b 
        m-[10px] p-[10px] mx-auto block focus:outline-none focus:ring-0 focus:border-none"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-[90%] min-h-[20px] border-0 bg-transparent border-b
            m-[10px] p-[10px] mx-auto block focus:outline-none focus:ring-0 focus:border-none"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-[90%] min-h-[20px] border-0 bg-transparent border-b 
          m-[10px] p-[10px] mx-auto block focus:outline-none focus:ring-0 focus:border-none"
          type="password"
          placeholder="Password"
        />
      <button
  type="submit"
  className="w-[90%] min-h-[20px] rounded-[5px] p-[10px] border-0 w-fit mx-auto block">
  Sign Up
</button>

        <div className="text-sm text-center m-[10px] p-[6px]">
          Already have an account?{' '}
          <Link to="/" className="text-forest no-underline">
            Log In
          </Link>
        </div>
        </legend>
      </form>
    </div>
  );
}