import { useState } from 'react'
import heroImg from './assets/insight_hero.png'
import signatureImg from './assets/insight_signature.png'
import logoImg from './assets/logo.jpg'
import tempatImg from './assets/tempat.jpeg'
import cashierImg from './assets/cashier.webp'

const MENU_ITEMS = [
  // --- SIGNATURES (category: signatures) ---
  {
    id: 1,
    name: "Rascoff",
    category: "signatures",
    price: "Rp 30.000",
    description: "Perpaduan unik espresso, sirup buah berry segar, dan sentuhan soda berkarbonasi yang menyegarkan.",
    tag: "Signature Kopi",
    image: signatureImg
  },
  {
    id: 2,
    name: "Goela Kacang",
    category: "signatures",
    price: "Rp 30.000",
    description: "Kopi susu khas INSIGHT dengan sensasi manis kacang gurih dan keharuman kayu manis pilihan.",
    tag: "Terlaris",
    image: signatureImg
  },
  {
    id: 3,
    name: "Classical",
    category: "signatures",
    price: "Rp 30.000",
    description: "Kopi hitam dingin bercita rasa premium dengan sirup lemon segar dan sentuhan manis vanila.",
    tag: "Klasik",
    image: signatureImg
  },
  {
    id: 4,
    name: "Black Berries",
    category: "signatures",
    price: "Rp 30.000",
    description: "Espresso berpadu dengan susu premium, buah berry manis, dan foam cream tebal nan creamy.",
    tag: "Favorit",
    image: signatureImg
  },
  {
    id: 5,
    name: "Black Sunset",
    category: "signatures",
    price: "Rp 30.000",
    description: "Kombinasi eksotis espresso segar dengan rasa jeruk (orange), manisnya buah peach, dan soda.",
    tag: "Spesial",
    image: signatureImg
  },
  {
    id: 6,
    name: "Berrymuach",
    category: "signatures",
    price: "Rp 28.000",
    description: "Minuman non-kopi dari perpaduan mix berries segar, stroberi, anggur, dan topping whipped cream lembut.",
    tag: "Terpopuler",
    image: signatureImg
  },
  {
    id: 7,
    name: "Wild Berry",
    category: "signatures",
    price: "Rp 28.000",
    description: "Kesegaran susu premium berpadu dengan rasa stroberi alami dan anggur manis.",
    tag: "Favorit",
    image: signatureImg
  },
  {
    id: 8,
    name: "Strawberry Cheesecake",
    category: "signatures",
    price: "Rp 28.000",
    description: "Minuman creamy rasa stroberi manis berpadu gurihnya keju ala kue cheesecake.",
    tag: "Manis",
    image: signatureImg
  },
  {
    id: 9,
    name: "Pisang Ijo",
    category: "signatures",
    price: "Rp 28.000",
    description: "Inspirasi dessert tradisional Pisang Ijo dalam segelas susu pandan manis yang segar.",
    tag: "Unik",
    image: signatureImg
  },
  {
    id: 10,
    name: "Feeling Good",
    category: "signatures",
    price: "Rp 28.000",
    description: "Minuman mocktail segar non-kopi dengan paduan serai (lemongrass), jeruk manis, leci, dan soda.",
    tag: "Segar",
    image: signatureImg
  },
  {
    id: 11,
    name: "Could be Purple",
    category: "signatures",
    price: "Rp 28.000",
    description: "Rasa buah anggur segar berpadu manis leci dengan sedikit kehangatan sari jahe pilihan.",
    tag: "Rekomendasi",
    image: signatureImg
  },
  {
    id: 12,
    name: "Milky Mango",
    category: "signatures",
    price: "Rp 28.000",
    description: "Susu segar creamy dipadukan dengan sari buah mangga manis yang lembut memanjakan lidah.",
    tag: "Favorit",
    image: signatureImg
  },

  // --- COFFEE (category: coffee) ---
  {
    id: 13,
    name: "Espresso (Hot)",
    category: "coffee",
    price: "Rp 15.000",
    description: "Ekstrak kopi Arabika lokal pekat berkualitas tinggi dengan aroma harum yang intens.",
    tag: "Klasik",
    image: signatureImg
  },
  {
    id: 14,
    name: "Americano (Hot/Ice)",
    category: "coffee",
    price: "Rp 20.000",
    description: "Espresso Arabika premium yang diencerkan dengan air panas atau disajikan dingin di atas es.",
    tag: "Harian",
    image: signatureImg
  },
  {
    id: 15,
    name: "Cappuccino (Hot)",
    category: "coffee",
    price: "Rp 26.000",
    description: "Paduan espresso kaya rasa dengan susu hangat berpemanas dan busa susu (foam) tebal di atasnya.",
    tag: "Favorit",
    image: signatureImg
  },
  {
    id: 16,
    name: "Café Latte (Hot/Ice)",
    category: "coffee",
    price: "Rp 28.000",
    description: "Minuman espresso yang dipadukan dengan susu segar hangat berbusa tipis (microfoam).",
    tag: "Populer",
    image: signatureImg
  },
  {
    id: 17,
    name: "Mochaccino (Hot/Ice)",
    category: "coffee",
    price: "Rp 32.000",
    description: "Kombinasi espresso, cokelat hitam premium khas INSIGHT, dan susu segar creamy.",
    tag: "Klasik",
    image: signatureImg
  },
  {
    id: 18,
    name: "KopSu Ori",
    category: "coffee",
    price: "Rp 24.000",
    description: "Kopi susu gula aren khas INSIGHT dengan susu segar premium super creamy.",
    tag: "Terlaris",
    image: signatureImg
  },
  {
    id: 19,
    name: "KopSu Oat",
    category: "coffee",
    price: "Rp 26.000",
    description: "Pilihan sehat kopi susu gula aren dengan susu oat (Oat Milk) premium yang kaya nutrisi.",
    tag: "Sehat",
    image: signatureImg
  },
  {
    id: 20,
    name: "KopSu Cheese",
    category: "coffee",
    price: "Rp 26.000",
    description: "Kopi susu gula aren dengan topping cream cheese gurih melimpah di atasnya.",
    tag: "Spesial",
    image: signatureImg
  },
  {
    id: 21,
    name: "KopSu Klepon",
    category: "coffee",
    price: "Rp 26.000",
    description: "Kopi susu rasa kue tradisional klepon dengan rasa pandan dan kelapa gurih.",
    tag: "Unik",
    image: signatureImg
  },
  {
    id: 22,
    name: "Manual Brew V60",
    category: "coffee",
    price: "Rp 25.000",
    description: "Seduhan manual biji kopi pilihan (Single Origin) menggunakan filter V60 untuk rasa bersih dan fruity.",
    tag: "Seduh Manual",
    image: signatureImg
  },

  // --- NON-COFFEE (category: non-coffee) ---
  {
    id: 23,
    name: "Frappe Matcha",
    category: "non-coffee",
    price: "Rp 30.000",
    description: "Teh hijau matcha Jepang murni kualitas premium diblender dingin dengan susu segar dan whipped cream.",
    tag: "Premium",
    image: signatureImg
  },
  {
    id: 24,
    name: "Frappe Cookies Cream",
    category: "non-coffee",
    price: "Rp 30.000",
    description: "Minuman blended susu segar dengan kepingan biskuit cokelat Oreo renyah dan cream lezat.",
    tag: "Favorit",
    image: signatureImg
  },
  {
    id: 25,
    name: "Chocolate Latte",
    category: "non-coffee",
    price: "Rp 27.000",
    description: "Minuman cokelat hitam pekat lokal premium dengan rasa manis gurih bertekstur kental.",
    tag: "Klasik",
    image: signatureImg
  },
  {
    id: 26,
    name: "Matcha Latte",
    category: "non-coffee",
    price: "Rp 27.000",
    description: "Minuman teh hijau matcha khas Jepang murni dipadukan dengan susu segar pilihan.",
    tag: "Favorit",
    image: signatureImg
  },
  {
    id: 27,
    name: "Taro Latte",
    category: "non-coffee",
    price: "Rp 27.000",
    description: "Minuman ubi ungu taro khas INSIGHT yang manis, harum, dan lembut di lidah.",
    tag: "Manis",
    image: signatureImg
  },
  {
    id: 28,
    name: "Red Velvet Latte",
    category: "non-coffee",
    price: "Rp 27.000",
    description: "Minuman non-kopi dengan rasa kue red velvet manis gurih berpadu susu premium.",
    tag: "Favorit",
    image: signatureImg
  },
  {
    id: 29,
    name: "Lemon / Lemongrass Tea (Hot/Ice)",
    category: "non-coffee",
    price: "Rp 20.000",
    description: "Teh segar berpadu dengan air perasan jeruk lemon alami atau keharuman serai herbal.",
    tag: "Segar",
    image: signatureImg
  },
  {
    id: 30,
    name: "Peach/Lychee/Strawberry Tea Ice",
    category: "non-coffee",
    price: "Rp 20.000",
    description: "Teh es segar dengan pilihan rasa buah manis alami: buah persik, leci, atau stroberi segar.",
    tag: "Terlaris",
    image: signatureImg
  },

  // --- SNACKS & FOODS (category: foods) ---
  {
    id: 31,
    name: "Mush-room Crisp",
    category: "foods",
    price: "Rp 18.000",
    description: "Jamur tiram segar berbalut tepung bumbu krispi renyah luar biasa gurih disajikan hangat.",
    tag: "Snack",
    image: heroImg
  },
  {
    id: 32,
    name: "England Fries",
    category: "foods",
    price: "Rp 18.000",
    description: "Kentang goreng potongan tebal ala Inggris yang renyah di luar dan lembut di dalam.",
    tag: "Snack",
    image: heroImg
  },
  {
    id: 33,
    name: "Grrrlic Bread",
    category: "foods",
    price: "Rp 18.000",
    description: "Roti panggang mentega dengan olesan bawang putih aromatik dan taburan peterseli kering.",
    tag: "Rekomendasi",
    image: heroImg
  },
  {
    id: 34,
    name: "Exotic Skin",
    category: "foods",
    price: "Rp 20.000",
    description: "Kulit ayam krispi super renyah berbumbu rempah rahasia khas INSIGHT.",
    tag: "Snack",
    image: heroImg
  },
  {
    id: 35,
    name: "Mendoan",
    category: "foods",
    price: "Rp 18.000",
    description: "Tempe mendoan hangat tradisional dengan balutan tepung daun bawang melimpah dan sambal kecap pedas.",
    tag: "Tradisional",
    image: heroImg
  },
  {
    id: 36,
    name: "Fishballs",
    category: "foods",
    price: "Rp 20.000",
    description: "Bakso ikan goreng gurih renyah dengan siraman saus sambal manis pedas khas.",
    tag: "Snack",
    image: heroImg
  },
  {
    id: 37,
    name: "SingKeju",
    category: "foods",
    price: "Rp 20.000",
    description: "Singkong goreng empuk merekah gurih dengan taburan keju cheddar parut melimpah.",
    tag: "Snack",
    image: heroImg
  },
  {
    id: 38,
    name: "Demie Apa?",
    category: "foods",
    price: "Rp 20.000",
    description: "Sajian mie spesial racikan ala INSIGHT dengan sayuran segar, kerupuk, dan telur.",
    tag: "Favorit",
    image: heroImg
  },
  {
    id: 39,
    name: "Teriaakin Chic",
    category: "foods",
    price: "Rp 27.000",
    description: "Rice bowl ayam goreng tepung krispi dengan lumuran saus teriyaki manis gurih dan telur mata sapi.",
    tag: "Rice Bowl",
    image: heroImg
  },
  {
    id: 40,
    name: "Crazy Rice",
    category: "foods",
    price: "Rp 27.000",
    description: "Nasi gila pedas manis khas INSIGHT dengan sosis sapi, bakso, tumis sayur segar, dan telur.",
    tag: "Terlaris",
    image: heroImg
  },
  {
    id: 41,
    name: "Salting Chic",
    category: "foods",
    price: "Rp 27.000",
    description: "Rice bowl ayam krispi dengan siraman saus salted egg (telur asin) gurih creamy dan telur mata sapi.",
    tag: "Rekomendasi",
    image: heroImg
  },
  {
    id: 42,
    name: "Dabu X Dabu",
    category: "foods",
    price: "Rp 27.000",
    description: "Rice bowl ayam dengan topping sambal dabu-dabu iris pedas segar khas Manado dan telur mata sapi.",
    tag: "Spesial Pedas",
    image: heroImg
  },
  {
    id: 43,
    name: "Angry Chic",
    category: "foods",
    price: "Rp 27.000",
    description: "Rice bowl ayam krispi berselimut saus cabe pedas membara yang menantang adrenalin dan telur mata sapi.",
    tag: "Sangat Pedas",
    image: heroImg
  },
  {
    id: 44,
    name: "Bull Grogi",
    category: "foods",
    price: "Rp 32.000",
    description: "Rice bowl irisan daging sapi empuk saus bulgogi manis gurih ala Korea dan telur mata sapi.",
    tag: "Daging Premium",
    image: heroImg
  },
  {
    id: 45,
    name: "Basillica",
    category: "foods",
    price: "Rp 32.000",
    description: "Nasi kemangi aromatik disajikan dengan tumisan ayam pedas kemangi beraroma segar dan telur.",
    tag: "Rekomendasi",
    image: heroImg
  }
]

function App() {
  const [activeTab, setActiveTab] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [reservationName, setReservationName] = useState('')
  const [reservationTime, setReservationTime] = useState('')
  const [reservationGuests, setReservationGuests] = useState('2')
  const [reservationStatus, setReservationStatus] = useState('')

  const filteredMenu = MENU_ITEMS.filter(item => {
    if (activeTab === 'all') return true
    return item.category === activeTab
  })

  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredMenu.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedMenu = filteredMenu.slice(startIndex, startIndex + itemsPerPage)

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setCurrentPage(1)
  }

  const handleReservationSubmit = (e) => {
    e.preventDefault()
    if (!reservationName || !reservationTime) {
      setReservationStatus('error')
      return
    }
    setReservationStatus('success')
    // Reset form
    setTimeout(() => {
      setReservationName('')
      setReservationTime('')
      setReservationGuests('2')
      setReservationStatus('')
    }, 4000)
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-gray-800 font-sans selection:bg-[#111111] selection:text-[#FFFFFF]">

      {/* HEADER / NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#FFFFFF]/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src={logoImg}
              alt="Insight Coffee Logo"
              className="w-9 h-9 rounded-full object-cover group-hover:scale-105 transition-transform duration-300 shadow-md"
            />
            <span className="font-serif text-2xl font-bold tracking-wide text-[#111111] group-hover:text-[#D4A000] transition-colors duration-300">
              INSIGHT
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700">
            <a href="#" className="hover:text-[#111111] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#111111] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Home</a>
            <a href="#menu" className="hover:text-[#111111] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#111111] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Menu</a>
            <a href="#tentang" className="hover:text-[#111111] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#111111] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Tentang Kami</a>
            <a href="#reservasi" className="hover:text-[#111111] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#111111] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Reservasi</a>
            <a href="#kontak" className="hover:text-[#111111] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#111111] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Kontak</a>
          </div>

          {/* Call to Action (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#reservasi"
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#111111] text-[#FFFFFF] hover:bg-[#D4A000] hover:shadow-lg hover:shadow-yellow-900/10 transition-all duration-300 active:scale-95"
            >
              Pesan Meja
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFFFF] border-b border-gray-200/80 px-6 py-6 flex flex-col gap-4 shadow-xl animate-fadeIn">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-lg text-gray-800 hover:text-[#111111]">Home</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-lg text-gray-800 hover:text-[#111111]">Menu</a>
            <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-lg text-gray-800 hover:text-[#111111]">Tentang Kami</a>
            <a href="#reservasi" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-lg text-gray-800 hover:text-[#111111]">Reservasi</a>
            <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-lg text-gray-800 hover:text-[#111111]">Kontak</a>
            <hr className="border-gray-200 my-2" />
            <a
              href="#reservasi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider bg-[#111111] text-[#FFFFFF] hover:bg-[#D4A000]"
            >
              Pesan Meja
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-[#111111] text-[#FFFFFF] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="INSIGHT Coziness"
            className="w-full h-full object-cover opacity-35 filter brightness-95 scale-105 animate-subtleZoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#111111]/90 to-[#111111]/70" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FFFFFF]/10 text-[#F5C518] border border-[#F5C518]/30 mb-6 backdrop-blur-sm">
              ✨ Temu Rasa & Cerita Hangat
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-wide mb-6">
              Kehangatan yang <br />
              <span className="text-[#F5C518] italic">Sederhana</span> di Setiap Seduhan.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              Lebih dari sekadar cangkir kopi. INSIGHT adalah ruang temu rasa, kisah, dan inspirasi, diracik istimewa dari biji kopi lokal terbaik untuk menyempurnakan hari Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#menu"
                className="px-8 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wider bg-[#F5C518] text-[#111111] hover:bg-[#FFFFFF] hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 active:scale-95"
              >
                Lihat Menu
              </a>
              <a
                href="#tentang"
                className="px-8 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wider border border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                Cerita Kami
              </a>
            </div>
          </div>

          {/* Hero Side Image Card (Signature) */}
          <div className="lg:col-span-2 hidden lg:block relative">
            <div className="relative p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl overflow-hidden group">
              <img
                src={signatureImg}
                alt="Signature Latte"
                className="w-full h-[380px] object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#111111]/90 border border-white/10 backdrop-blur-md">
                <span className="text-[10px] font-bold text-[#F5C518] uppercase tracking-wider">Khas INSIGHT</span>
                <h3 className="font-serif font-bold text-lg text-white mt-1">INSIGHT Signature Latte</h3>
                <p className="text-xs text-gray-300 mt-1">Es kopi susu aren yang kaya rasa dan sangat lembut.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="py-16 bg-[#F5F5F5]/50 border-b border-gray-200/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex gap-4 items-start p-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#111111]/5 flex items-center justify-center text-[#111111] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828 9.9a5 5 0 117.072 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#111111] mb-1">Biji Kopi Premium</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Dipilih langsung dari perkebunan lokal berkelanjutan dan disangrai khusus.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#111111]/5 flex items-center justify-center text-[#111111] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#111111] mb-1">Barista Dedikatif</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Diramu dengan akurasi dan rasa cinta oleh barista berpengalaman kami.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#111111]/5 flex items-center justify-center text-[#111111] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#111111] mb-1">Ruang Kolaborasi</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Suasana hangat yang dirancang nyaman untuk bercerita, bekerja, atau bersantai.</p>
            </div>
          </div>

        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-24 max-w-6xl mx-auto px-6 scroll-mt-12">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A000]">Katalog Rasa</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mt-2 mb-4">
            Eksplorasi Menu INSIGHT
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
            Sajian istimewa dari racikan kopi autentik hingga makanan gurih Nusantara pilihan yang memanjakan selera.
          </p>

          {/* Menu Categories Tab */}
          <div className="flex justify-center flex-wrap gap-2 mt-8">
            {[
              { id: 'all', label: 'Semua Menu' },
              { id: 'signatures', label: 'Signatures' },
              { id: 'coffee', label: 'Classic & Aren Coffee' },
              { id: 'non-coffee', label: 'Non-Coffee & Frappe' },
              { id: 'foods', label: 'Snacks & Foods' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeTab === tab.id
                  ? 'bg-[#111111] text-[#FFFFFF] shadow-lg shadow-yellow-950/10'
                  : 'bg-[#F5F5F5] text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedMenu.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 flex flex-col sm:flex-row gap-5 items-start sm:items-center group"
            >
              {/* Product Image */}
              <div className="w-full sm:w-28 h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#111111]/90 text-[9px] font-bold uppercase text-[#FFFFFF] tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex-1 w-full text-left">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-serif font-bold text-lg text-[#111111] group-hover:text-[#D4A000] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-serif font-bold text-base text-[#D4A000] shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[#D4A000] text-[10px] font-bold uppercase tracking-wider">
                  <span>
                    {item.category === 'signatures' && 'Signature Drink'}
                    {item.category === 'coffee' && 'Classic & Aren Coffee'}
                    {item.category === 'non-coffee' && 'Non-Coffee & Frappe'}
                    {item.category === 'foods' && 'Snack & Food'}
                  </span>
                  <span>•</span>
                  <span>Premium Taste</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12 animate-fadeIn">
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
                document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-stone-50 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 shadow-sm`}
              aria-label="Previous Page"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 font-sans">
              Halaman {currentPage} dari {totalPages}
            </span>

            <button
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-stone-50 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 shadow-sm`}
              aria-label="Next Page"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* STORY & ABOUT SECTION */}
      <section id="tentang" className="bg-[#F5F5F5]/70 py-24 scroll-mt-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images Gallery Collage */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="p-2 bg-white rounded-3xl shadow-lg hover:rotate-1 transition-transform duration-300">
              <img
                src={tempatImg}
                alt="Suasana Kafe INSIGHT"
                className="rounded-2xl h-64 w-full object-cover"
              />
            </div>
            <div className="p-2 bg-white rounded-3xl shadow-lg mt-8 hover:-rotate-1 transition-transform duration-300">
              <img
                src={cashierImg}
                alt="Kasir INSIGHT"
                className="rounded-2xl h-64 w-full object-cover"
              />
            </div>
            {/* Absolute Decorative badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-[#111111] text-[#FFFFFF] flex flex-col justify-center items-center shadow-xl border-4 border-[#FFFFFF]">
              <span className="font-serif font-bold text-xl">Est.</span>
              <span className="font-bold text-xs uppercase tracking-widest text-[#F5C518]">2021</span>
            </div>
          </div>

          {/* About Content */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A000]">Tentang Kami</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] mt-2 mb-6">
              INSIGHT: Hangatnya Cita Rasa & Pertemuan
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              INSIGHT bermula dari keinginan sederhana:  menciptakan ruang nyaman sebagai tempat untuk mencari inspirasi, ide, dan pikiran. Bahkan tempat untuk berkumpul, bercengkerama, bersenda gurau, atau bergibah ria.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed font-light">

            </p>
            <div className="flex gap-8 border-t border-gray-300/60 pt-8 w-full">
              <div>
                <h4 className="font-serif font-bold text-3xl text-[#111111]">100%</h4>
                <p className="text-xs text-gray-500 uppercase font-semibold mt-1">Biji Kopi Lokal</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-3xl text-[#111111]">20+</h4>
                <p className="text-xs text-gray-500 uppercase font-semibold mt-1">Menu Pilihan</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-3xl text-[#111111]">5★</h4>
                <p className="text-xs text-gray-500 uppercase font-semibold mt-1">Kepuasan Rasa</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RESERVATION SECTION */}
      <section id="reservasi" className="py-24 max-w-4xl mx-auto px-6 scroll-mt-12">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#111111] to-[#0A0A0A] text-[#FFFFFF] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F5C518]">Reservasi Meja</span>
            <h2 className="font-serif text-3xl font-bold mt-2 mb-4">Ingin Berkumpul Bersama?</h2>
            <p className="text-xs sm:text-sm text-gray-300 mb-8 leading-relaxed">
              Pesan meja Anda terlebih dahulu untuk memastikan kenyamanan berkumpul bersama teman, keluarga, atau rekan kerja di INSIGHT.
            </p>

            <form onSubmit={handleReservationSubmit} className="flex flex-col sm:flex-row gap-3 items-end">
              <div className="w-full text-left">
                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Nama Lengkap</label>
                <input
                  type="text"
                  value={reservationName}
                  onChange={(e) => setReservationName(e.target.value)}
                  placeholder="Ketik nama..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 text-xs focus:outline-none focus:ring-1 focus:ring-[#F5C518]"
                />
              </div>
              <div className="w-full text-left">
                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Jam & Tanggal</label>
                <input
                  type="datetime-local"
                  value={reservationTime}
                  onChange={(e) => setReservationTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 text-xs focus:outline-none focus:ring-1 focus:ring-[#F5C518]"
                />
              </div>
              <div className="w-full sm:w-28 text-left">
                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5 tracking-wider">Jumlah Orang</label>
                <select
                  value={reservationGuests}
                  onChange={(e) => setReservationGuests(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 text-xs focus:outline-none focus:ring-1 focus:ring-[#F5C518]"
                >
                  <option value="1" className="text-gray-900">1 Orang</option>
                  <option value="2" className="text-gray-900">2 Orang</option>
                  <option value="4" className="text-gray-900">4 Orang</option>
                  <option value="6" className="text-gray-900">6+ Orang</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#F5C518] text-[#111111] hover:bg-[#FFFFFF] transition-all duration-300 cursor-pointer shrink-0 active:scale-95"
              >
                Kirim
              </button>
            </form>

            {reservationStatus === 'success' && (
              <p className="text-emerald-400 text-xs font-bold mt-4 tracking-wide animate-fadeIn">
                ✓ Reservasi Anda berhasil terkirim! Sampai jumpa di kedai INSIGHT.
              </p>
            )}
            {reservationStatus === 'error' && (
              <p className="text-rose-400 text-xs font-bold mt-4 tracking-wide animate-fadeIn">
                ⚠ Mohon isi Nama Lengkap dan Jam/Tanggal reservasi Anda.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER & KONTAK SECTION */}
      <footer id="kontak" className="bg-[#0A0A0A] text-[#FFFFFF] pt-20 pb-10 border-t border-gray-800 scroll-mt-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">

          {/* Brand Info */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group w-max">
              <img
                src={logoImg}
                alt="Insight Coffee Logo"
                className="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-serif text-3xl font-bold tracking-wide text-white group-hover:text-[#F5C518] transition-colors duration-300">
                INSIGHT
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              INSIGHT adalah ruang temu rasa yang menyajikan kehangatan secangkir kopi pilihan dan aneka hidangan renyah gurih bercita rasa tinggi.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#F5C518] hover:text-[#F5C518] hover:bg-white/10 transition-all duration-350" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#F5C518] hover:text-[#F5C518] hover:bg-white/10 transition-all duration-350" aria-label="Facebook">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#F5C518] hover:text-[#F5C518] hover:bg-white/10 transition-all duration-350" aria-label="Twitter / X">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-6">Jam Operasional</h4>
            <ul className="text-gray-400 text-sm flex flex-col gap-3">
              <li className="flex justify-between">
                <span>Setiap Hari</span>
                <span className="text-white font-medium">10.00 – 23.00</span>
              </li>
              <li className="text-[#F5C518] font-medium text-xs mt-2">
                *Close order pukul 22.00
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-6">Lokasi & Kontak</h4>
            <div className="text-gray-400 text-sm flex flex-col gap-4">
              <p className="leading-relaxed">
                Jl. Kapten Piere Tendean No.19a Lantai 2, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132
              </p>
              <p>
                <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider">Telepon / WhatsApp</span>
                <a href="tel:+628123456789" className="text-white hover:text-[#F5C518] font-semibold transition-colors duration-300">
                  +62 817-1761-7900
                </a>
              </p>
              <p>
                <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider">Email</span>
                <a href="mailto:hello@insight.com" className="text-white hover:text-[#F5C518] font-semibold transition-colors duration-300">
                  [EMAIL_ADDRESS]
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 INSIGHT Premium Coffee. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors duration-300">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Syarat & Ketentuan</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
