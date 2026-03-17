import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "15745f91-0fb9-4982-99ee-b085d459f97d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Submit error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

return (
    <section id="contact" className="w-full bg-black text-white py-24 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: The "Footer" Information */}
            <div className="flex flex-col justify-center gap-8">
                <div>
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-zinc-400 text-lg">
                       Open to projects, internships, and new opportunities.
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-zinc-300">
                    <a href="mailto:aryanyadav9660@gmail.com" className="text-xl hover:text-blue-400 transition-colors w-fit">
                        aryanyadav9660@gmail.com
                    </a>
                    <p className="text-xl">(+91) 9760519646</p>
                </div>

                <p className="text-sm text-zinc-600 mt-8">
                    &copy; {new Date().getFullYear()} Aryan Yadav. All rights reserved.
                </p>
            </div>

            {/* Right Side: The Form */}
            <div className="bg-zinc-900 p-8 md:p-10 rounded-2xl border border-zinc-800 shadow-2xl">
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5"> 
                        <label htmlFor="name" className="text-sm text-zinc-400">Name</label>
                        <input type="text" id="name" name="name" required className="w-full h-12 rounded-lg p-3 bg-black text-white border border-zinc-700 focus:border-blue-500 outline-none transition-all" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm text-zinc-400">Email</label>
                        <input type="email" id="email" name="email" required className="w-full h-12 rounded-lg p-3 bg-black text-white border border-zinc-700 focus:border-blue-500 outline-none transition-all" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-sm text-zinc-400">Message</label>
                        <textarea id="message" name="message" required className="w-full h-32 rounded-lg p-3 bg-black text-white border border-zinc-700 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors mt-2 disabled:opacity-50">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    
                    {result && <p className={`text-center text-sm mt-2 ${result.includes("Successfully") ? "text-emerald-400" : result.includes("Sending") ? "text-zinc-400" : "text-rose-400"}`}>{result}</p>}
                </form>
            </div>

        </div>
    </section>
);
}