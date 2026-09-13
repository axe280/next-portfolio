"use client";

import { useEffect, useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { projectsData } from "../data/projects";
import ProjectModal from "./ProjectModal";

const columnsCountBreakPoints = {
  350: 2,
  740: 3,
  900: 4,
  1440: 5,
  2200: 6,
};

const gutterBreakPoints = {
  350: 2,
  740: 2,
  900: 2,
  1440: 2,
  2200: 2,
};

export default function GalleryElements() {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Don't render ResponsiveMasonry during SSR.
  if (!mounted) {
    return null;
  }

  return (
    <div>
      {/* <div className="max-h-[300vh] lg:max-h-[200vh] overflow-hidden relative"> */}
      <div className="overflow-hidden relative">
        <div className="absolute left-0 bottom-0 z-10 h-16 w-full bg-gradient-to-t from-background via-backfrom-background/50 to-transparent" />

        <ResponsiveMasonry
          gutterBreakPoints={gutterBreakPoints}
          columnsCountBreakPoints={columnsCountBreakPoints}
          className="z-0 relative"
        >
          <Masonry>
            {projectsData.map((project, index) => (
              <button
                type="button"
                // className="relative flex group border-2 border-foreground"
                className="relative flex group"
                key={`${project.previewImg}-${index}`}
                onClick={() => setIsModalOpen(true)}
              >
                <div
                  className="absolute inset-0 z-10 bg-foreground/95 text-background flex items-center justify-center
                text-[40px] opacity-0 group-hover:opacity-100
              "
                >
                  <MdOutlineZoomOutMap className="group-hover:scale-100 scale-20 transition-transform duration-300" />
                </div>
                <img
                  src={project.previewImg}
                  alt=""
                  loading="lazy"
                  className="align-top"
                />
              </button>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        project={projectsData[1]}
        closeModal={closeModalHandler}
      />
    </div>
  );
}
