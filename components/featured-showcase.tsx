import Image from 'next/image';

export function FeaturedShowcase() {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      <Image
        src="/images/hero/IMG_2959_enhanced.jpg"
        alt="Custom rustic kitchen cabinetry with center island"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-xl text-white">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Rustic Elegance
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Custom knotty alder cabinetry with a weathered finish, featuring a spacious center island and handcrafted range hood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
