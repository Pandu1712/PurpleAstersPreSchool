import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import type { ContactFormData } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    childAge: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ---------------- VALIDATION ---------------- */
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const whatsappMessage = `
*New Inquiry from Purple Asters Pre School*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
${formData.childAge ? `*Child's Age:* ${formData.childAge}` : ""}

*Message:*
${formData.message}
    `.trim();

    const whatsappNumber = "919535666707"; // country code + number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        childAge: "",
      });
    }, 800);
  };

  /* ---------------- CHANGE HANDLER ---------------- */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: value.replace(/\D/g, "") }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8]">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to give your child the best start? Contact us today.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT CONTACT INFO */}
          <div className="animate-slideInLeft">
            <div className="bg-gradient-to-br from-[#5B4FBF] to-[#4A9FD8] rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone />
                  <a href="tel:+919535666707" className="hover:underline">
                    +91 95356 66707
                  </a>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail />
                  <a
                    href="mailto:purpleasterssanjaynagar@gmail.com?subject=Inquiry%20from%20Website"
                    className="hover:underline break-all"
                  >
                    purpleasterssanjaynagar@gmail.com
                  </a>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=213,+6th+Cross,+2nd+Block,+RMV+Extension,+Sanjayanagar,+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    213, 6th Cross, 2nd Block, 80 Feet Road, RMV Extension,
                    Sanjayanagar, Bengaluru – 560094
                  </a>
                </div>

               <div className="flex items-start space-x-4">
  <Clock />
  <span>Mon – Fri: 9:00 AM – 7:00 PM</span>
  <span>Saturday: 9:00 AM – 2:00 PM</span>
</div>

              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="animate-slideInRight">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
              />

              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit Mobile Number"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
              />

              <select
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200"
              >
                <option value="">Child Age (Optional)</option>
                <option value="2-3 years">2–3 years</option>
                <option value="3-4 years">3–4 years</option>
                <option value="4-5 years">4–5 years</option>
              </select>

              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="mt-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl border">
            <iframe
              title="Purple Asters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1114822106474!2d77.5757644!3d13.028572100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1742c829a665%3A0xd6acdd07d8354eaa!2sPurple%20Asters!5e0!3m2!1sen!2sin!4v1765682944437!5m2!1sen!2sin" 
              className="w-full h-[450px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
