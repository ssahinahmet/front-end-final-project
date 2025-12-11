import React, { useState } from "react";

type Props = {
  onSubmit: (payload: { username?: string; email: string; password: string }) => Promise<void>;
  isRegister?: boolean;
};

export default function AuthForm({ onSubmit, isRegister = false }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await onSubmit({ username: isRegister ? username : undefined, email, password });
    } catch (error: any) {
      setErr(error?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{isRegister ? "Create account" : "Log in"}</h2>
      {isRegister && (
        <label className="block mb-2">
          <div className="text-sm">Username</div>
          <input required value={username} onChange={e => setUsername(e.target.value)} className="mt-1 w-full p-2 border rounded" />
        </label>
      )}
      <label className="block mb-2">
        <div className="text-sm">Email</div>
        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full p-2 border rounded" />
      </label>
      <label className="block mb-4">
        <div className="text-sm">Password</div>
        <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full p-2 border rounded" />
      </label>
      {err && <div className="text-red-500 text-sm mb-2">{err}</div>}
      <button disabled={loading} type="submit" className="w-full py-2 rounded bg-slate-800 text-white">
        {loading ? "Working..." : isRegister ? "Register" : "Login"}
      </button>
    </form>
  );
}
