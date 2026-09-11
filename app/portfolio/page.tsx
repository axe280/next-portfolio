const projects = [
  {
    pathName: "flwr",
    imagesPathNames: [
      "origin_3784_optim_head.png",
      "origin_3784_optim_aside_desk.png",
      "origin_3784_optim_aside_mob.png",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div>
      <div>Portfolio Page</div>

      <div className="relative overflow-hidden">
        <div className="wrapper">
          {projects.map((project) => (
            <div
              key={project.pathName}
              className="my-10 mx-auto w-full relative"
            >
              {project.imagesPathNames.map((imgFileName) => (
                <div
                  key="imgFileName"
                  className="absolute inset-0 animation-zoom"
                >
                  <div className="absolute w-full h-full">
                    <img
                      src={`/projects/${project.pathName}/${imgFileName}`}
                      width="3784"
                      height="5166"
                      alt=""
                    />
                  </div>
                </div>
              ))}

              <div className="">
                <img
                  src="/projects/flwr/origin_3784_optim_blank.png"
                  width="3784"
                  height="5166"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
