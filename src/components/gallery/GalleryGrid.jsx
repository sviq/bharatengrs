import GalleryItem from './GalleryItem'

export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <GalleryItem key={image.id} image={image} />
      ))}
    </div>
  )
}

