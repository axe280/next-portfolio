import GalleryElements from "./GalleryElements";

export default function Portfolio() {
  return (
    <div className="bg-mist-50">
      <div className="c-wrapper py-15 md:py-20">
        <div className="c-container">
          <div className="grid mb-10 md:grid-cols-[33%_1fr] md:gap-6">
            <div></div>
            <div className="text-4xl pb-5 border-b-2 border-dashed border-light">
              Portfolio
            </div>
          </div>
        </div>
      </div>

      <div>
        <GalleryElements />
      </div>
    </div>
  );
}
