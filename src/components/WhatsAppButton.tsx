import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const whatsappNumber = "919535666707"; // ✅ COUNTRY CODE + NUMBER (NO SPACES)
    const message =
      "Hello! I would like to know more about Purple Asters Pre School.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-20 right-0 bg-white rounded-xl shadow-2xl p-4 w-64 animate-slideInRight">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-900"
          >
            <X size={16} />
          </button>

          <p className="text-sm font-semibold text-gray-800">
            Have questions?
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Chat with us on WhatsApp for admissions & details.
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={32} />

        {/* Notification Ping */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
        </span>

        {isHovered && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
            Chat on WhatsApp
          </div>
        )}
      </button>
    </div>
  );
}
