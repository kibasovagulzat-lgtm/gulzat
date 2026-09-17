import React, { useState } from 'react';
import { 
  Calendar, 
  Camera, 
  Eye, 
  Image as ImageIcon, 
  MapPin, 
  Plus, 
  Sparkles, 
  Upload, 
  X 
} from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/portfolioData';
import { GalleryPhoto } from '../types';

export const GallerySection: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(GALLERY_PHOTOS);
  const [activeCategory, setActiveCategory] = useState<string>('Барлығы');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  // New photo form state
  const [newTitle, setNewTitle] = useState('');
  const [newYear, setNewYear] = useState('2026');
  const [newCategory, setNewCategory] = useState<'Семинар' | 'Сынама' | 'Консультация' | 'Шара'>('Шара');
  const [newDesc, setNewDesc] = useState('');
  const [newLocation, setNewLocation] = useState('№16 мектеп, Ақтау қ.');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const categories = ['Барлығы', 'Семинар', 'Сынама', 'Консультация', 'Шара'];

  const filteredPhotos = photos.filter((p) => {
    if (activeCategory === 'Барлығы') return true;
    return p.category === activeCategory;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newPhotoItem: GalleryPhoto = {
      id: `custom-photo-${Date.now()}`,
      title: newTitle,
      year: newYear,
      category: newCategory,
      description: newDesc || 'Кәсіби бағдар беру шарасынан естелік сәт.',
      imageUrl: previewUrl || 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
      location: newLocation,
    };

    setPhotos([newPhotoItem, ...photos]);
    setIsUploadOpen(false);
    setNewTitle('');
    setNewDesc('');
    setPreviewUrl(null);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
              <Camera className="h-3.5 w-3.5 text-amber-600" />
              Фотошежіре & Шаралар сәті
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              ІС-ШАРАЛАР ГАЛЕРЕЯСЫ
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Оқушылармен, ата-аналармен және педагогтермен өткізілген кәсіби бағдар кездесулері
            </p>
          </div>

          <button
            id="open-upload-modal-btn"
            onClick={() => setIsUploadOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition shadow-sm self-start md:self-auto"
          >
            <Plus className="h-4 w-4 text-amber-300" />
            Жаңа фото жүктеу
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              id={`gallery-item-${photo.id}`}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-xs hover:border-emerald-600/60 card-hover-shadow transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback placeholder
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-emerald-900 shadow-md">
                    <Eye className="h-5 w-5" />
                  </span>
                </div>
                <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 text-emerald-900 backdrop-blur-sm shadow-xs">
                  {photo.year} жыл
                </span>
                <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950/80 text-amber-300 backdrop-blur-sm">
                  {photo.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1.5">
                    {photo.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-stone-400 pt-2 border-t border-stone-100">
                  <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4 backdrop-blur-md animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-[#FAF9F5] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/9] w-full bg-black">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-md">
                    {selectedPhoto.category} • {selectedPhoto.year} жыл
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <MapPin className="h-3.5 w-3.5 text-emerald-700" />
                    <span>{selectedPhoto.location}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Upload Photo Modal */}
        {isUploadOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsUploadOpen(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:bg-stone-100 text-stone-700 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
                Жаңа іс-шара фотосын қосу
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Мектепте немесе кәсіпорында өткен бағдар беру сәттерін портфолиоға енгізіңіз.
              </p>

              <form onSubmit={handleAddPhotoSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Іс-шара атауы *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Мысалы: «Мамандықтар сыныбы» кездесуі"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Жылы
                    </label>
                    <input
                      type="text"
                      value={newYear}
                      onChange={(e) => setNewYear(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Санаты
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none"
                    >
                      <option value="Семинар">Семинар</option>
                      <option value="Сынама">Сынама</option>
                      <option value="Консультация">Консультация</option>
                      <option value="Шара">Шара</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Өткізілген орны
                  </label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="№16 мектеп, Ақтау қ."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Қысқаша сипаттама
                  </label>
                  <textarea
                    rows={2}
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="Іс-шара мақсаты мен оқушылар қатысы..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-emerald-600 focus:outline-none resize-none"
                  />
                </div>

                {/* File Upload Trigger */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Фотосурет файлы
                  </label>
                  <div className="border-2 border-dashed border-stone-300 rounded-xl p-4 text-center hover:bg-stone-50 transition cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {previewUrl ? (
                      <div className="flex items-center justify-center gap-3">
                        <img src={previewUrl} alt="Preview" className="h-12 w-16 object-cover rounded-lg" />
                        <span className="text-xs font-medium text-emerald-800">Фото таңдалды (өзгерту үшін басыңыз)</span>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <Upload className="h-6 w-6 text-stone-400 mx-auto" />
                        <p className="text-xs text-stone-600 font-medium">Суретті таңдаңыз немесе осында сүйреңіз</p>
                        <p className="text-[10px] text-stone-400">PNG, JPG 5MB дейін</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setIsUploadOpen(false)}
                    className="px-4 py-2 rounded-xl border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-50"
                  >
                    Бас тарту
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900"
                  >
                    Галереяға қосу
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
