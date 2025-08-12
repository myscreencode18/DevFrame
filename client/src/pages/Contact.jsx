import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        formData
      );
      setStatus({ success: res.data.success });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ error: err.response?.data?.error || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Diagonal split */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-800 via-gray-900 to-pink-800"></div>
        {/* Glowing orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-cyan-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-pink-500/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* Floating Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-2xl grid gap-6 backdrop-blur-lg bg-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl"
      >
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Let’s Build Something Epic
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/10 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/10 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="p-4 rounded-xl bg-white/10 border border-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 outline-none transition"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 font-bold uppercase tracking-wide hover:scale-105 hover:shadow-lg transition-transform"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status?.success && (
          <p className="text-green-400 text-center">{status.success}</p>
        )}
        {status?.error && (
          <p className="text-red-400 text-center">{status.error}</p>
        )}
      </form>
    </section>
  );
}
