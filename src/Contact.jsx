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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Submit error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-black px-5 py-10" id="contact">
     <form 
        onSubmit={onSubmit} 
        className="w-full max-w-[450px] bg-gray-800 p-8  shadow-2xl flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Contact Me</h2>
        
        <div className="flex flex-col gap-2"> 
          <label htmlFor="name" className="text-white">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full h-10 rounded-md p-2 bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full h-10 rounded-md p-2 bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            className="w-full h-32 rounded-md p-2 bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 disabled:bg-gray-500"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Status Message Display */}
        {result && (
          <p className={`text-center mt-2 ${result.includes("Successfully") ? "text-green-400" : "text-red-400"}`}>
            {result}
          </p>
        )}
      </form>
    </section>
  );
}