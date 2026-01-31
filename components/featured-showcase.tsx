import Image from 'next/image';

export function FeaturedShowcase() {
  return (
    <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] overflow-hidden">
      <Image
        src="/images/hero/IMG_2959_enhanced.jpg"
        alt="Custom rustic kitchen cabinetry with center island"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent sm:from-black/60 sm:via-black/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-xl text-white">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-4">
              Rustic Elegance
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              Custom knotty alder cabinetry with a weathered finish, featuring a spacious center island and handcrafted range hood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
