import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  {
    main: "https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg",
    hover: "https://images.pexels.com/photos/8422149/pexels-photo-8422149.jpeg",
  },
  {
    main: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
    hover: "https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg",
  },
  {
    main: "https://images.pexels.com/photos/8613140/pexels-photo-8613140.jpeg",
    hover: "https://images.pexels.com/photos/8535257/pexels-photo-8535257.jpeg",
  },
  {
    main: "https://images.pexels.com/photos/8613143/pexels-photo-8613143.jpeg",
    hover: "https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ---------- AUTO MAIN SLIDER ---------- */
  useEffect(() => {
    if (paused || popupIndex !== null) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, popupIndex]);

  /* ---------- AUTO HORIZONTAL SCROLL ---------- */
  useEffect(() => {
    if (paused) return;
    const el = scrollRef.current;
    if (!el) return;

    const id = setInterval(() => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(id);
  }, [paused]);

  /* ---------- ESC CLOSE ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPopupIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#F0EDFF] to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= MAIN SLIDER ================= */}
        <div
          className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img.main}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setPopupIndex(i)}
            />
          ))}

          <button
            onClick={() =>
              setActive(active === 0 ? images.length - 1 : active - 1)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => setActive((active + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* ================= GRID HOVER CHANGE ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setPopupIndex(i)}
            >
              <img
                src={img.main}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                src={img.hover}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-110"
              />
            </div>
          ))}
        </div>

        {/* ================= AUTO HORIZONTAL SCROLL ================= */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide py-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="min-w-[280px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setPopupIndex(i % images.length)}
            >
              <img
                src={img.main}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= POPUP MODAL ================= */}
      {popupIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setPopupIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[popupIndex].main}
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />

            <button
              onClick={() => setPopupIndex(null)}
              className="absolute -top-4 -right-4 bg-white p-2 rounded-full"
            >
              <X />
            </button>

            <button
              onClick={() =>
                setPopupIndex(
                  popupIndex === 0 ? images.length - 1 : popupIndex - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setPopupIndex((popupIndex + 1) % images.length)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
