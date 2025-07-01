export default function Signup({ setPage }) {
  return (
    <div className="w-full bg-[#e0e0e0] flex flex-col items-center justify-center h-screen bg-earth">
      <form className="p-10 rounded shadow-md w-[250px] space-y-6 bg-white">
        <input
          className="w-[90%] min-h-[20px] border-0 bg-transparent border-b 
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
         <input
          type="submit"
          className="w-[90%] min-h-[20px] rounded-[5px] border-0 w-fit m-[15px] p-[10px] mx-auto block"
          value="Sign up"
        />

        <div className="text-center m-[3px] p-[6px]inline-block">
          Already have an account?{' '}
          <button
            onClick={() => setPage('login')}
            className=" no-underline bg-transparent border-none cursor-pointer"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}