import { Link } from 'react-router-dom';

export default function ForgotPassword() {
return (
    <div className="flex flex-col  items-center justify-center h-screen bg-earth">
        <div className="bg-white p-8 rounded shadow-md w-80">
        <p className="text-sm text-gray-600 mb-4">Enter your email address and We’ll send you instructions to reset your password.</p>
        <input
  className="w-[90%] min-h-[20px] w-fit border-0 bg-transparent border-b  
  m-[10px] p-[10px] block mx-auto focus:outline-none focus:ring-0 focus:border-none"
  type="email"
  placeholder="Your Email"
/>
        <button type='submit' className="w-[90%] min-h-[20px] rounded-[5px] p-[10px] border-0 w-fit mx-auto block">
            Send Reset Link
        </button>
        <div className="text-sm text-center m-[10px] p-[6px]">
            Back to <Link to="/" className="text-forest no-underline">Login</Link>
        </div>
        </div>
    </div>
    );
}