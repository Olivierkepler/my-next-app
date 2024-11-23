export default function Login() {
    const handleLogin = async (e) => {
      e.preventDefault();
      // Add authentication logic
    };
  
    return (
      <form onSubmit={handleLogin} className="max-w-sm mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 w-full" />
        <input type="password" placeholder="Password" className="border p-2 w-full mt-4" />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full mt-4">Login</button>
      </form>
    );
  }
  