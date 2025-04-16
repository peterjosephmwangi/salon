export default function ContactPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            We’d love to hear from you! Whether you have a question, need an appointment, or just want to say hello, feel free to reach out.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +123 456 7890</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> contact@salonapp.com</p>
              <p className="text-gray-600 mb-2"><strong>Address:</strong> 123 Beauty Street, Glam City, NY</p>
              <p className="text-gray-600"><strong>Hours:</strong> Mon-Sat: 9AM - 7PM</p>
            </div>
            
            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" rows={4} placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
