import Image from "next/image";

const acceptedFormats = "jpg, jpeg, png, webp, avif, svg, gif";

type ImageGalleryProps = {
  title: string;
  images: string[];
  folderHint: string;
};

export function ImageGallery({ title, images, folderHint }: ImageGalleryProps) {
  if (images.length === 0) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="card min-h-[320px] overflow-hidden">
            <div className="flex h-56 items-center justify-center bg-gradient-to-br from-white/15 via-white/5 to-yelden-yellow/40 p-8 text-center">
              <div>
                <p className="text-lg font-black text-yelden-yellow">Image Placeholder</p>
                <p className="mt-3 text-sm text-white/70">
                  Add images to <strong>{folderHint}</strong>
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black">{title} Placeholder {item}</h3>
              <p className="mt-2 text-sm text-white/60">
                Supported: {acceptedFormats}. Register the image path in data/images.ts.
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {images.map((src, index) => (
        <div key={src} className="card overflow-hidden">
          <div className="relative h-64">
            <Image src={src} alt={`${title} image ${index + 1}`} fill className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
}
