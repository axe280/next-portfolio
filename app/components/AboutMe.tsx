import { CiMobile3 } from "react-icons/ci";
import { FaCss3Alt, FaVuejs } from "react-icons/fa";
import {
  SiGit,
  SiGsap,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscEditCompact } from "react-icons/vsc";

export default function AboutMe() {
  return (
    <div className="c-wrapper bg-mist-50 py-15 md:py-20">
      <div className="c-container">
        <div className="grid mb-10 md:grid-cols-[33%_1fr] md:gap-6">
          <div></div>
          <div className="text-4xl pb-5 border-b-2 border-dashed border-light">
            Biography
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[33%_1fr] md:gap-y-10 md:gap-x-6 lg:gap-y-20">
          <div>
            <h3 className="text-lg font-medium uppercase flex items-center gap-4 mb-4">
              <VscEditCompact />
              Personal Info
            </h3>

            <ul>
              <li>
                <strong>Name: </strong>
                Emma Lesley
              </li>
              <li>
                <strong>Date of birth:</strong> 28.03.1992
              </li>
              <li>
                <strong>Email:</strong> axeworkmail@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +3 (050) 251 89 00
              </li>
              <li>
                <strong>City:</strong> Valencia, Spain
              </li>
            </ul>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              aperiam reiciendis eveniet cumque a iste eligendi totam excepturi
              odio doloremque tempora ad reprehenderit id impedit inventore. Ut
              nam repellat suscipit.
            </p>
          </div>

          <div>
            <ul className="space-y-4">
              <li>
                <div className="text-4xl flex items-center gap-2">
                  <SiHtml5 />
                  <SiSass />
                  <SiTailwindcss />
                </div>
                <strong>HTML, SCSS, Talwind</strong>
              </li>
              <li>
                <div className="text-4xl flex items-center gap-2">
                  <SiJavascript />
                  <SiTypescript />
                </div>
                <strong>JS, TS</strong>
              </li>
              <li>
                <div className="text-4xl flex items-center gap-2">
                  <SiReact />
                  <FaVuejs />
                </div>
                <strong>React, Vue</strong>
              </li>
              <li>
                <div className="text-4xl flex items-center gap-2">
                  <SiGsap />
                  <FaCss3Alt />
                </div>
                <strong>GSAP, CSS Animation</strong>
              </li>
              <li>
                <div className="text-4xl flex items-center gap-2">
                  <SiGit />
                  <SiJira />
                </div>
                <strong>Git, Jira</strong>
              </li>
              <li>
                <div className="text-4xl flex items-center gap-2">
                  <CiMobile3 />
                </div>
                <strong>Responsive Design</strong>
              </li>
            </ul>
          </div>

          <div>
            <div className="grid gap-4">
              <div>
                <img
                  src="https://placehold.co/600x400"
                  alt=""
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
