"use client";

import { useEffect, useRef } from "react";
import { GalleryImageType, ProjectType } from "../data/projects";
import { IoCloseOutline } from "react-icons/io5";

type ProjectProps = {
  project: ProjectType;
  isOpen: boolean;
  closeModal: () => void;
};

export default function ProjectModal({
  project,
  isOpen,
  closeModal,
}: ProjectProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className={`fixed inset-0 flex flex-col ${isOpen ? "z-100 opacity-100" : "-z-10 opacity-0"}`}
    >
      <button
        type="button"
        className="absolute right-6 z-20 top-2 2xl:right-12 2xl:top-10 2xl:-mt-2
         flex text-[24px] md:text-[32px]
        rounded-full items-center justify-center w-10 h-10 md:w-15 md:h-15
        bg-red-500 text-light border-2 border-background
        hover:scale-110 transition-transform duration-200
      "
        onClick={() => closeModal()}
      >
        <IoCloseOutline />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex flex-col h-full overflow-y-auto md:px-0"
      >
        <div
          className="absolute inset-0 z-0  bg-background/90"
          onClick={() => closeModal()}
        ></div>

        <div className="c-container my-auto  relative z-10 p-4 md:p-10 bg-background border-2 border-foreground">
          <div className="mb-6 space-y-2">
            <div className="text-2xl lg:text-4xl font-medium pr-10">
              {project.name}
            </div>
            <div>{project.date}</div>
            {project.link && (
              <div>
                <a target="_blank" href={project.link}>
                  {project.link}
                </a>
              </div>
            )}
            <p>{project.description}</p>
          </div>

          <div className="">
            {project.galleryImages.map(
              (galleryItem: GalleryImageType, index) => (
                <div
                  key={`${galleryItem.src}-${index}`}
                  className="flex flex-col-reverse gap-4 lg:grid lg:grid-cols-[80%_1fr] lg:gap-10 group
                  border-t border-foreground/15 pt-6 mt-6 md:pt-10 md:mt-10 lg:mt-0 lg:pt-0 lg:border-0
                  "
                  onClick={() => closeModal()}
                >
                  <div className="lg:border-t lg:border-foreground/15 lg:pt-10 lg:mb-10 group-last:mb-0">
                    <img src={galleryItem.src} alt="" className="w-full" />
                  </div>
                  <div className="flex flex-col gap:4 font-medium lg:pt-10">
                    {galleryItem.descr.map((text, index) => (
                      <p key={`${galleryItem.src}-${galleryItem.src}-${index}`}>
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
