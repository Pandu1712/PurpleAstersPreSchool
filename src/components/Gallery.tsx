import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/* ===================== SECTION 1: CAROUSEL ===================== */
const carouselImages = [
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788215/WhatsApp_Image_2025-12-15_at_14.08.26_649ed3b5_x8ebsy.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788215/WhatsApp_Image_2025-12-15_at_14.08.25_7c41ceba_misjsf.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788214/WhatsApp_Image_2025-12-15_at_13.56.00_fcae7e2c_go4poo.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788213/WhatsApp_Image_2025-12-15_at_13.47.00_17631305_vsillz.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788212/WhatsApp_Image_2025-12-15_at_13.46.59_b938803c_hgifxg.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765680673/IMG20220830104905_ru9p2d.jpg",

  ];

/* ===================== SECTION 2: GRID ===================== */
const gridImages = [
  {
    main: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788215/WhatsApp_Image_2025-12-15_at_14.08.25_14d58766_incxfg.jpg",
    hover: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788214/WhatsApp_Image_2025-12-15_at_13.56.00_2cd34cbd_w651fa.jpg",
  },
  {
    main: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788213/WhatsApp_Image_2025-12-15_at_14.08.26_4390ddbf_mhncut.jpg",
    hover: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788213/WhatsApp_Image_2025-12-15_at_13.46.58_355b50f8_nrep8x.jpg",
  },
  {
    main: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765683294/IMG-20230724-WA0003_g3r4oj.jpg",
    hover: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765683298/WhatsApp_Image_2025-06-02_at_8.33.42_PM_naafuq.jpg",
  },
  {
    main: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765683298/WhatsApp_Image_2025-06-02_at_8.33.42_PM_naafuq.jpg",
    hover: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765680856/IMG20220706100354_vwpj0h.jpg",
  },
];

/* ===================== SECTION 3: AUTO SCROLL ===================== */
const scrollImages = [
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765680725/IMG_20221024_133225_zx07ou.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765680714/IMG20220801101222_1_lubfbw.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765680660/IMG20240416101641_x3k9r0.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765680671/IMG20240416092352_jt2cup.jpg",
"https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788213/WhatsApp_Image_2025-12-15_at_13.47.00_17631305_vsillz.jpg",
"https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788213/WhatsApp_Image_2025-12-15_at_13.46.58_355b50f8_nrep8x.jpg",
"https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788213/WhatsApp_Image_2025-12-15_at_13.46.59_1a929d0b_f6v9ix.jpg",
"https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788213/WhatsApp_Image_2025-12-15_at_13.49.31_33755a35_fa1qbk.jpg",
"https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788213/WhatsApp_Image_2025-12-15_at_13.47.00_c6b8c1ea_npo3lq.jpg",
"https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788213/WhatsApp_Image_2025-12-15_at_13.49.30_be808353_ckobo3.jpg",
"https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788215/WhatsApp_Image_2025-12-15_at_14.08.25_7c41ceba_misjsf.jpg",
"https://res.cloudinary.com/dd4oiwnep/image/upload/v1765788214/WhatsApp_Image_2025-12-15_at_13.56.01_52b6c04f_d4wl4l.jpg",


];

export default function Gallery() {
  /* ===================== STATE ===================== */
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [popupImages, setPopupImages] = useState<string[]>([]);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ===================== AUTO CAROUSEL ===================== */
  useEffect(() => {
    const id = setInterval(() => {
      setCarouselIndex((p) => (p + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  /* ===================== AUTO HORIZONTAL SCROLL ===================== */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const id = setInterval(() => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(id);
  }, []);

  /* ===================== POPUP OPEN ===================== */
  const openPopup = (images: string[], index: number) => {
    setPopupImages(images);
    setPopupIndex(index);
  };

  /* ===================== POPUP NAV ===================== */
  const prevPopup = () => {
    if (popupIndex === null) return;
    setPopupIndex(popupIndex === 0 ? popupImages.length - 1 : popupIndex - 1);
  };

  const nextPopup = () => {
    if (popupIndex === null) return;
    setPopupIndex((popupIndex + 1) % popupImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-white via-[#F0EDFF] to-white">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        <div className="text-center mb-16">
  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
    Our{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8]">
      Gallery
    </span>
  </h2>

  <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
    A glimpse of joyful moments, learning experiences, and creative activities
    at Purple Asters.
  </p>
</div>


        {/* ===================== 1. CAROUSEL ===================== */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
          {carouselImages.map((src, i) => (
            <img
              key={i}
              src={src}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === carouselIndex ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => openPopup(carouselImages, i)}
            />
          ))}

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
            onClick={() =>
              setCarouselIndex(
                carouselIndex === 0
                  ? carouselImages.length - 1
                  : carouselIndex - 1
              )
            }
          >
            <ChevronLeft />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
            onClick={() =>
              setCarouselIndex((carouselIndex + 1) % carouselImages.length)
            }
          >
            <ChevronRight />
          </button>
        </div>

        {/* ===================== 2. GRID ===================== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {gridImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() =>
                openPopup(
                  gridImages.map((g) => g.main),
                  i
                )
              }
            >
              <img
                src={img.main}
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition"
              />
              <img
                src={img.hover}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition scale-110"
              />
            </div>
          ))}
        </div>

        {/* ===================== 3. AUTO SCROLL ===================== */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide"
        >
          {[...scrollImages, ...scrollImages].map((src, i) => (
            <div
              key={i}
              className="min-w-[280px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openPopup(scrollImages, i % scrollImages.length)}
            >
              <img src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* ===================== POPUP ===================== */}
     {/* ===================== POPUP ===================== */}
{popupIndex !== null && (
  <div
    className="fixed inset-0 z-[100] bg-black/80"
    onClick={() => setPopupIndex(null)}
  >
    {/* WRAPPER – accounts for navbar */}
    <div
      className="absolute inset-x-0 bottom-0 top-[96px]
      flex items-center justify-center px-4"
    >
      <div
        className="relative w-full max-w-5xl
        bg-black rounded-2xl p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setPopupIndex(null)}
          className="absolute top-4 right-4
          bg-white text-black p-2 rounded-full
          shadow-xl hover:scale-110 transition"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* IMAGE */}
        <img
          src={popupImages[popupIndex]}
          className="w-full
          max-h-[calc(100vh-180px)]
          object-contain rounded-xl"
        />

        {/* LEFT NAV */}
        <button
          onClick={prevPopup}
          className="absolute left-3 top-1/2 -translate-y-1/2
          bg-white p-3 rounded-full shadow-lg"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT NAV */}
        <button
          onClick={nextPopup}
          className="absolute right-3 top-1/2 -translate-y-1/2
          bg-white p-3 rounded-full shadow-lg"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
}
