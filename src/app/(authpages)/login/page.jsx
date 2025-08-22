"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Login successful!");
      router.push("/"); // Redirect to homepage
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="max-w-7xl w-full flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/pexels-hamza01nsr-12725051.jpg"
            alt="Login Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-base-100 flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-8">
            Login to your account to continue
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm mt-6 text-gray-500">
            Don’t have an account?{" "}
            <a href="/signup" className="link link-primary">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


