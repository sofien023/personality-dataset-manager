import { useState } from 'react';

export default function Login({ setPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@meng.tn' && password === 'Test123') {
      setPage('main');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    
    <div className="w-full bg-[#e0e0e0]  flex flex-col items-center justify-center h-screen ">
      <form
        onSubmit={handleSubmit}
        className=" p-10 rounded shadow-md w-[400px] space-y-6 bg-gray-200"
      >
        <input
          className="w-[90%] min-h-[20px] w-fit border-0 bg-transparent border-b 
            m-[10px] p-[10px] block mx-auto focus:outline-none focus:ring-0 focus:border-none"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[90%] min-h-[20px] w-fit border-0 bg-transparent border-b 
            m-[10px] p-[10px] block mx-auto focus:outline-none focus:ring-0 focus:border-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          className="w-[90%] min-h-[20px] rounded-[5px] border-0 w-fit m-[15px] p-[10px] mx-auto block"
          value="Login"
        />
        

        <div className="text-base text-center p-[10px]">
          <button
            type="button"
            onClick={() => setPage('forgot-password')}
            className="text-forest no-underline bg-transparent border-none cursor-pointer"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-base text-center p-[6px]">
          Don’t have an account?{' '}
          <button
            type="button"
            onClick={() => setPage('signup')}
            className="text-forest no-underline bg-transparent border-none cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}