// import react from "react";
// import code from "../assets/images/code.png";
import { ReactComponent as BannerImg } from "../assets/images/Frame.svg";
// import { ReactComponent as BannerImg1 } from "../assets/images/banner.svg";

const Home = () => {
  return (
    <main>
      <section className="py-[100px] relative banner-wrapper">
        <div className="bg-code absolute font-Unbounded leading-[100%] text-[30vw] top-0 bottom-0 left-0 right-0 mx-auto text-center text-white text-opacity-[0.03] z-[-1]">
          Code
        </div>
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col gap-[50px] justify-between items-center">
            <div className="col-span-7 lg:text-start text-center">
              <p className="text-white sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
                <span className="text-secondary font-bold font-Unbounded text-base">
                  &#123;
                </span>{" "}
                Introduction{" "}
                <span className="text-secondary font-bold font-Unbounded text-base">
                  &#125;
                </span>
              </p>
              <h1 className="xl:text-[52px] lg:text-[42px] sm:text-[48px] font-Unbounded font-medium text-white max-w-[650px]">
                Hi, I am Sravani, a{" "}
                <span className="text-secondary">Frontend</span> Developer
              </h1>
              <a
                href="#"
                className="btn-grad text-primary uppercase font-Jost font-semibold tracking-widest mt-4"
              >
                See projects
              </a>
              {/* <div className="flex items-start gap-2 mt-4">
                <button class="button button--narvi">
                  <span>
                    <span>Open chat</span>
                  </span>
                </button>
              </div> */}
            </div>
            <div className="col-span-5">
              <BannerImg className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-wrapper relative py-[70px]">
        <div className="container mx-auto">
          <p className="text-white text-center sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
            <span className="text-secondary font-bold font-Unbounded text-base">
              &#123;
            </span>{" "}
            About me{" "}
            <span className="text-secondary font-bold font-Unbounded text-base">
              &#125;
            </span>
          </p>
          <h2 className="text-white text-center text-[42px] font-Unbounded leading-[normal] py-3 max-w-[767px] mx-auto">
            I can deliver results that exceed your expectations.
          </h2>
          <p className="text-white text-xl font-Jost text-center text-opacity-75 max-w-[900px] mx-auto">
            Hi, I’m Sravani Samala, a passionate frontend website developer
            based in Surat. With over 2.5 years of experience, I bring ideas to
            life through clean, modern, and functional designs. I’m committed to
            delivering high-quality, user-focused websites that help businesses
            thrive online. My passion lies in turning ideas into engaging
            digital experiences.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
