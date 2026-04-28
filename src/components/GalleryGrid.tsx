type GalleryGridProps = {
  images: string[];
  title: string;
};

export function GalleryGrid({ images, title }: GalleryGridProps) {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <a href={image} target="_blank" rel="noreferrer" className="gallery-grid__item" key={image}>
          <img src={image} alt={`${title} 写真 ${index + 1}`} />
        </a>
      ))}
    </div>
  );
}
