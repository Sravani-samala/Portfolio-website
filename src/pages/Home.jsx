import { Link } from "react-router-dom";
import AnimatedSvg from "../components/AnimateSVG";
import MyPhoto1 from "../assets/images/sravani-image.png";
import brace from "../assets/images/left-brace.png";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";
import { ReactComponent as ExperienceIcon } from "../assets/icons/experience.svg";
import { ReactComponent as HtmlIcon } from "../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../assets/icons/css.svg";
import { ReactComponent as JsIcon } from "../assets/icons/javascript.svg";
import { ReactComponent as JqueryIcon } from "../assets/icons/jquery.svg";
import { ReactComponent as BootstrapIcon } from "../assets/icons/bootstrap.svg";
import { ReactComponent as TailwindIcon } from "../assets/icons/tailwind.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as WordpressIcon } from "../assets/icons/Wordpress.svg";
import { ReactComponent as ElemetorIcon } from "../assets/icons/Elementor.svg";
import { ReactComponent as ShopifyIcon } from "../assets/icons/shopify.svg";
import { ReactComponent as FigmaIcon } from "../assets/icons/figma.svg";
import { ReactComponent as WixIcon } from "../assets/icons/wix.svg";
import { ReactComponent as WebflowICon } from "../assets/icons/webflow.svg";
import { ReactComponent as SquareSpaceIcon } from "../assets/icons/squarespace.svg";
import { ReactComponent as GitIcon } from "../assets/icons/git.svg";
import { ReactComponent as VscodeIcon } from "../assets/icons/vscode.svg";
import { ReactComponent as ChatGPTicon } from "../assets/icons/ChatGPT.svg";
import { ReactComponent as GeminiIcon } from "../assets/icons/Gemini.svg";
import { ReactComponent as WebDevelopment } from "../assets/images/webdevelopment.svg";
import { ReactComponent as CustomDevelopment } from "../assets/images/custom-design.svg";
import { ReactComponent as EcommerceDevelopment } from "../assets/images/e-commerce-development.svg";
import { ReactComponent as Check } from "../assets/icons/check.svg";
import { ReactComponent as Readmore } from "../assets/icons/readmore.svg";
import Project1 from "../assets/images/Project1.png";
import Project2 from "../assets/images/Project2.png";
import Pro1 from "../assets/images/pro-1.png";
import Pro2 from "../assets/images/pro-2.png";
import Pro3 from "../assets/images/pro-3.png";
import Pro4 from "../assets/images/pro-4.png";
import Contactform from "../components/contact-form";
import { ReactComponent as CallIcon } from "../assets/icons/call-calling.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/sms-tracking.svg";
import { ReactComponent as Whatsapp } from "../assets/icons/whatsapp.svg";
import { ReactComponent as ContactUs } from "../assets/images/contact-us.svg";
import { ReactComponent as EmailBox } from "../assets/icons/email-box.svg";

import SplitText from "../components/splitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Home = () => {
  return (
    <main>
      <section className="md:py-[100px] sm:py-[70px] py-[50px] relative banner-wrapper">
        <div className="bg-code absolute font-Unbounded leading-[100%] text-[30vw] top-0 bottom-0 left-0 right-0 mx-auto text-center text-white text-opacity-[0.03] z-[-1]">
          Code
        </div>
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col gap-[50px] justify-between items-center">
            <div className="col-span-7 lg:text-start text-center ">
              <p className="text-white sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
                <span className="text-secondary font-bold font-Unbounded text-base">
                  &#123;
                </span>{" "}
                <SplitText
                  text="Introduction"
                  className="text-white"
                  delay={150}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                  onLetterAnimationComplete={handleAnimationComplete}
                />{" "}
                <span className="text-secondary font-bold font-Unbounded text-base">
                  &#125;
                </span>
              </p>

              <h1 className="xl:text-[52px] lg:text-[42px] sm:text-[48px] text-4xl leading-normal font-Unbounded font-medium text-white max-w-[650px]">
                Hi, I am Sravani, a{" "}
                <span className="text-secondary">Frontend</span> Developer
              </h1>
              <Link
                href="#"
                className="animate-jump btn-grad text-primary uppercase font-Jost font-semibold tracking-widest mt-4"
              >
                See projects
              </Link>
            </div>
            <div className="col-span-5">
              {/* <BannerImg className="w-full h-auto banner-vector" /> */}
              <AnimatedSvg className="w-full h-auto banner-vector" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-wrapper relative lg:py-[100px] py-[50px] code-bg">
        {/* <img src={brace} alt="brace" className="brace absolute h-80 top-0" /> */}
        <div className="container mx-auto">
          <div className="col">
            <p className="text-white text-center sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#123;
              </span>{" "}
              Who i am{" "}
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#125;
              </span>
            </p>
            <h2 className="text-white text-center md:text-[42px] sm:text-4xl text-3xl font-Unbounded leading-[normal] py-3 max-w-[767px] mx-auto">
              {/* I can deliver results that exceed your expectations. */}
              About me
            </h2>
          </div>

          <div className="flex mt-[50px] lg:gap-[80px] gap-[40px] md:flex-nowrap items-start flex-wrap">
            <div className="md:w-[50%] w-full md:sticky relative md:top-14 top-0">
              <div className="relative">
                <div class="img-wrapper">
                  <div class="img-inner-wrapper">
                    <img
                      src={MyPhoto1}
                      alt="sravani photo"
                      className="my-photo rounded-[20px] "
                    />
                  </div>
                </div>
                <div className="bg-secondary lg:p-[30px] p-[18px] absolute -top-12 text-center rounded-[20px] shadow-[0_5px_10px_0px_rgba(0,0,0,0.4)] ">
                  <strong className="text-white lg:text-5xl text-4xl font-Jost">
                    2.5 +
                  </strong>
                  <span className="block text-white lg:text-lg text-base font-Jost mt-2">
                    Years Experience
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-[50%] w-full">
              <p className="text-white lg:text-lg text-base font-Jost text-opacity-90 mb-3">
                Hi, I’m Sravani Samala, a passionate frontend web developer with
                over 3 years of experience. I specialize in creating E-commerce,
                Informative, Static, and Dynamic websites that are
                mobile-responsive, user-friendly, SEO frendly, fast-loading with
                manu more features. I’m committed to helping businesses grow
                with high-quality web solutions. I believe great websites are
                not just built; they are crafted with passion and precision.
              </p>

              <div className="flex gap-3 items-center mb-3">
                <EducationIcon className="lg:w-10 w-8 h-auto fill-secondary" />
                <h2 className="text-white text-start lg:text-[22px] text-lg font-Unbounded leading-[normal] py-3 design-heading">
                  Education
                </h2>
              </div>
              <div className="lg:p-5 p-4 bg-secondary bg-opacity-15 rounded-[20px] border border-secondary border-opacity-35F mb-6">
                <h2 className="text-white font-Unbounded lg:text-lg text-base">
                  Diploma in computer science
                </h2>
                <span className="text-white font-Jost lg:text-base text-sm">
                  Gujarat Technological University -{" "}
                  <strong className="text-secondary">[ 7.89 ] CGPA</strong>
                </span>
              </div>

              <div className="flex gap-3 items-center mb-3">
                <ExperienceIcon className="lg:w-10 w-8 h-auto fill-secondary" />
                <h2 className="text-white text-start lg:text-[22px] text-lg font-Unbounded leading-[normal] py-3 design-heading">
                  Experience
                </h2>
              </div>
              <div className="lg:p-5 p-4 bg-secondary bg-opacity-15 rounded-[20px] border border-secondary border-opacity-35F">
                <h2 className="text-white font-Unbounded lg:text-lg text-base">
                  Frontend developer
                </h2>
                <span className="text-white font-Jost lg:text-base text-sm">
                  At InspireFox Studio -{" "}
                  <strong className="text-secondary text-lg">2.5 +</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-wrapper relative lg:py-[100px] py-[50px]">
        <div className="container mx-auto">
          <div className="col">
            <p className="text-white text-center sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#123;
              </span>{" "}
              What do i know{" "}
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#125;
              </span>
            </p>
            <h2 className="text-white text-center md:text-[42px] sm:text-4xl text-3xl font-Unbounded leading-[normal] py-3 max-w-[767px] mx-auto">
              Skills
            </h2>
          </div>
          <div className="lg:w-[80%] w-full mx-auto mt-10">
            <div className="flex flex-grow-1 sm:gap-6 gap-3 justify-center flex-wrap">
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <HtmlIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <CssIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <JsIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <JqueryIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <BootstrapIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <TailwindIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <ReactIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <WordpressIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <ElemetorIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <ShopifyIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <WixIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <WebflowICon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <SquareSpaceIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
            </div>
          </div>

          <div className="col pt-24">
            <p className="text-white text-center sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#123;
              </span>{" "}
              What i uses{" "}
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#125;
              </span>
            </p>
            <h2 className="text-white text-center md:text-[42px] sm:text-4xl text-3xl font-Unbounded leading-[normal] py-3 max-w-[767px] mx-auto">
              Tools
            </h2>
          </div>
          <div className="lg:w-[80%] w-full mx-auto mt-10">
            <div className="flex flex-grow-1 sm:gap-6 gap-3 justify-center flex-wrap">
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <VscodeIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <GitIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <FigmaIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <ChatGPTicon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
              <div className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                <GeminiIcon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
              </div>
            </div>
          </div>

          {/* <div className="flex flex-grow-1 gap-6 justify-center mt-9 marquee-animation">
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <HtmlIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <CssIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <JsIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <JqueryIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <BootstrapIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <TailwindIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <ReactIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <WordpressIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <ElemetorIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <ShopifyIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <FigmaIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <WixIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <WebflowICon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <SquareSpaceIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <GitIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <HtmlIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <CssIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <JsIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <JqueryIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <BootstrapIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <TailwindIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <ReactIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <WordpressIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <ElemetorIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <ShopifyIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <FigmaIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <WixIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <WebflowICon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <SquareSpaceIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
          <div className="bg-black bg-opacity-25 p-9 border border-primary text-center rounded-[20px] shadow-[0_5px_10px_0px_rgb(2,52,54)]">
            <GitIcon className="fill-none w-16 h-16 mx-auto" />
          </div>
        </div> */}
        </div>
      </section>

      <section className="services-wrapper lg:py-[100px] py-[50px]">
        <div className="container mx-auto">
          <div className="flex lg:gap-[60px] gap-[30px] relative lg:flex-nowrap flex-wrap">
            <div className="lg:w-[35%] w-full">
              <div className="sticky top-[50px]">
                <p className="text-white text-start sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
                  <span className="text-secondary font-bold font-Unbounded text-base">
                    &#123;
                  </span>{" "}
                  What i do{" "}
                  <span className="text-secondary font-bold font-Unbounded text-base">
                    &#125;
                  </span>
                </p>
                <h2 className="text-white text-start md:text-[42px] sm:text-4xl text-3xl font-Unbounded leading-[normal] py-3 max-w-[767px] mx-auto">
                  My Services
                </h2>
                <p className="text-white lg:text-lg text-base font-Jost text-opacity-90 md:mb-3">
                  Hi, I’m Sravani Samala, a passionate frontend web developer
                  with over 3 years of experience. I specialize in creating
                  E-commerce, Informative, Static, and Dynamic websites that are
                  mobile-responsive, user-friendly, SEO frendly, fast-loading
                  with manu more features. I’m committed to helping businesses
                  grow with high-quality web solutions. I believe great websites
                  are not just built; they are crafted with passion and
                  precision.
                </p>
              </div>
            </div>
            <div className="lg:w-[65%] w-full">
              <div id="cards">
                <div id="card-1" className="card">
                  <div className="card__content flex md:flex-nowrap flex-wrap justify-between items-center bg-black h-full filter-blur-[100px] md:p-10 sm:p-8 p-6 border border-opacity-25 border-secondary rounded-[24px] text-center service-box relative md:gap-6 gap-3">
                    <WebDevelopment className="md:w-[40%] w-full md:h-[400px] h-[200px] md:mb-4 mb-0" />
                    <div className="md:w-[60%] w-full text-left">
                      <h3 className="text-white font-Unbounded lg:text-3xl text-[22px]">
                        Website Development
                      </h3>
                      <p className="text-white lg:text-lg text-base font-Jost my-3">
                        Frontend Website development with Optimized for all
                        screen sizes for a seamless user experience.
                      </p>
                      <ul className="text-white font-Jost">
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="card-2" className="card">
                  <div className="card__content flex md:flex-nowrap flex-wrap justify-between items-center bg-black h-full filter-blur-[100px] md:p-10 sm:p-8 p-6 border border-opacity-25 border-secondary rounded-[24px] text-center service-box relative md:gap-6 gap-3">
                    <CustomDevelopment className="md:w-[40%] w-full md:h-[400px] h-[200px] md:mb-4 mb-0" />
                    <div className="md:w-[60%] w-full text-left">
                      <h3 className="text-white font-Unbounded lg:text-3xl text-[22px]">
                        Custom Website Design
                      </h3>
                      <p className="text-white lg:text-lg text-base font-Jost my-3">
                        Unique designs built from scratch to match your vision.
                      </p>
                      <ul className="text-white font-Jost">
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="card-3" className="card">
                  <div className="card__content flex md:flex-nowrap flex-wrap justify-between items-center bg-black h-full filter-blur-[100px] md:p-10 sm:p-8 p-6 border border-opacity-25 border-secondary rounded-[24px] text-center service-box relative md:gap-6 gap-3">
                    <EcommerceDevelopment className="md:w-[40%] w-full md:h-[400px] h-[200px] md:mb-4 mb-0" />
                    <div className="md:w-[60%] w-full text-left">
                      <h3 className="text-white font-Unbounded lg:text-3xl text-[22px]">
                        CMS Website Development
                      </h3>
                      <p className="text-white lg:text-lg text-base font-Jost my-3">
                        WordPress, Webflow, Wix and Shopify solutions for
                        scalable. businesses
                      </p>
                      <ul className="text-white font-Jost">
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="flex gap-2 text-base font-light font-Jost">
                          <Check className="w-5 h-auto fill-secondary" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-8"></div>
        </div>
      </section>

      <section className="projects-wrapper relative lg:pt-[50px] lg:pb-[100px] pb-[70px]">
        <div className="container mx-auto">
          <div className="col mb-8">
            <p className="text-white text-center sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#123;
              </span>{" "}
              What I have Done ?{" "}
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#125;
              </span>
            </p>
            <h2
              className="text-white text-center font-Unbounded md:text-[42px] sm:text-4xl text-3xl font-
            leading-[normal] py-3 max-w-[767px] mx-auto"
            >
              My Projects
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            <div className="project-box cursor-pointer hover:-translate-y-2 bg-black bg-opacity-70 filter-blur-[100px] lg:p-5 p-5 project-boxy border border-opacity-25 border-secondary rounded-[24px] text-center relative">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <HtmlIcon className="w-10 h-10" />
                  <div className="col-span-2 text-left">
                    <h3 className="text-white font-Unbounded text-base">
                      Frontend website
                    </h3>
                    <p className="text-white text-[12px] font-Jost uppercase mt-1">
                      HTML | CSS | JS
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="bg-secondary text-black font-Jost text-base group px-4 py-2 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white"
                >
                  Visit{" "}
                  <Readmore className="fill-black w-[16px] h-auto group-hover:fill-white transition-all duration-300 ease-in-out" />
                </a>
              </div>
              <img
                src={Pro1}
                alt="Project1"
                className="w-full mt-6 h-auto object-cover project-image"
              />
            </div>
            <div className="project-box cursor-pointer hover:-translate-y-2 bg-black bg-opacity-70 filter-blur-[100px] lg:p-5 p-5 project-boxy border border-opacity-25 border-secondary rounded-[24px] text-center relative">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <HtmlIcon className="w-10 h-10" />
                  <div className="col-span-2 text-left">
                    <h3 className="text-white font-Unbounded text-base">
                      Frontend website
                    </h3>
                    <p className="text-white text-[12px] font-Jost uppercase mt-1">
                      HTML | CSS | JS
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="bg-secondary text-black font-Jost text-base group px-4 py-2 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white"
                >
                  Visit{" "}
                  <Readmore className="fill-black w-[16px] h-auto group-hover:fill-white transition-all duration-300 ease-in-out" />
                </a>
              </div>
              <img
                src={Pro2}
                alt="Project2"
                className="w-full mt-6 h-auto object-cover project-image"
              />
            </div>
            <div className="project-box cursor-pointer hover:-translate-y-2 bg-black bg-opacity-70 filter-blur-[100px] lg:p-5 p-5 project-boxy border border-opacity-25 border-secondary rounded-[24px] text-center relative">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <HtmlIcon className="w-10 h-10" />
                  <div className="col-span-2 text-left">
                    <h3 className="text-white font-Unbounded text-base">
                      Frontend website
                    </h3>
                    <p className="text-white text-[12px] font-Jost uppercase mt-1">
                      HTML | CSS | JS
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="bg-secondary text-black font-Jost text-base group px-4 py-2 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white"
                >
                  Visit{" "}
                  <Readmore className="fill-black w-[16px] h-auto group-hover:fill-white transition-all duration-300 ease-in-out" />
                </a>
              </div>
              <img
                src={Pro1}
                alt="Project1"
                className="w-full mt-6 h-auto object-cover project-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-wrapper relative lg:pb-[100px] pb-[70px]">
        <div className="container mx-auto">
          {/* <div className="col">
            <p className="text-white text-center sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#123;
              </span>{" "}
              Let's Talk about ideas{" "}
              <span className="text-secondary font-bold font-Unbounded text-base">
                &#125;
              </span>
            </p>
            <h2 className="text-white text-center text-[42px] capitalize font-Unbounded leading-[normal] py-3 ">
              Get in touch
            </h2>
            <div className="info-wrapper">
              <div
                className="grid md:grid-cols-3 grid-cols-2 gap-8
               my-5"
              >
                <a
                  href="tel:8469259994"
                  className="text-center bg-white p-8 rounded-3xl bg-opacity-5 flex flex-col gap-4 items-center text-white text-xl font-Jost font-bold group hover:text-accent transition-all duration-300 ease-in-out hover:shadow-[0_6px_15px_#212121fc] break-all"
                >
                  <CallIcon className="fill-white text-white bg-secondary bg-opacity-15 border border-secondary w-16 h-16 rounded-[8px] p-3 group-hover:bg-opacity-100 transition-all duration-300 ease-in-out" />{" "}
                  8469259994
                </a>

                <a
                  href="mailto:sravanisamala79884@gmail.com"
                  className="text-center bg-white p-8 rounded-3xl bg-opacity-5 flex flex-col gap-4 items-center text-white text-xl font-Jost font-bold group hover:text-accent transition-all duration-300 ease-in-out hover:shadow-[0_6px_15px_#212121fc] break-all"
                >
                  <EmailIcon className="fill-white text-white bg-secondary bg-opacity-15 border border-secondary w-16 h-16 rounded-[8px] p-3 group-hover:bg-opacity-100 transition-all duration-300 ease-in-out" />{" "}
                  sravanisamala79884@gmail.com
                </a>

                <a
                  href="https://wa.me/919876543210"
                  className="text-center bg-white p-8 rounded-3xl bg-opacity-5 flex flex-col gap-4 items-center text-white text-xl font-Jost font-bold group hover:text-accent transition-all duration-300 ease-in-out hover:shadow-[0_6px_15px_#212121fc] break-all"
                >
                  <Whatsapp className="fill-white text-white bg-secondary bg-opacity-15 border border-secondary w-16 h-16 rounded-[8px] p-3 group-hover:bg-opacity-100 transition-all duration-300 ease-in-out" />{" "}
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div> */}
          <div className="grid md:grid-cols-2 sm:gap-10 gap-5 mt-[50px] items-center">
            <div className="relative">
              <EmailBox className="w-[50%] h-auto email-box absolute opacity-5 -right-0 bottom-0" />

              <p className="text-white text-start sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
                <span className="text-secondary font-bold font-Unbounded text-base">
                  &#123;
                </span>{" "}
                Let's Talk about ideas{" "}
                <span className="text-secondary font-bold font-Unbounded text-base">
                  &#125;
                </span>
              </p>
              <h2 className="text-white text-start md:text-[42px] sm:text-4xl text-3xl capitalize font-Unbounded leading-[normal] py-3 ">
                Get in touch
              </h2>

              <div className="info-wrapper">
                <div
                  className="grid grid-cols-1 sm:gap-8 gap-5
               my-5"
                >
                  <a
                    href="tel:8469259994"
                    className="text-start flex gap-4 items-center text-white sm:text-xl text-base font-Jost font-bold group hover:text-accent transition-all duration-300 ease-in-out break-all"
                  >
                    <CallIcon className="fill-white text-white bg-secondary bg-opacity-15 border border-secondary sm:w-16 sm:h-16 w-12 h-12 rounded-[8px] p-3 group-hover:bg-opacity-100 transition-all duration-300 ease-in-out" />{" "}
                    8469259994
                  </a>

                  <a
                    href="mailto:sravanisamala79884@gmail.com"
                    className="text-start flex gap-4 items-center text-white sm:text-xl text-base font-Jost font-bold group hover:text-accent transition-all duration-300 ease-in-out break-all"
                  >
                    <EmailIcon className="fill-white text-white bg-secondary bg-opacity-15 border border-secondary sm:w-16 sm:h-16 w-12 h-12 rounded-[8px] p-3 group-hover:bg-opacity-100 transition-all duration-300 ease-in-out" />{" "}
                    sravanisamala79884@gmail.com
                  </a>

                  <a
                    href="https://wa.me/919876543210"
                    className="text-start flex gap-4 items-center text-white sm:text-xl text-base font-Jost font-bold group hover:text-accent transition-all duration-300 ease-in-out break-all"
                  >
                    <Whatsapp className="fill-white text-white bg-secondary bg-opacity-15 border border-secondary sm:w-16 sm:h-16 w-12 h-12 rounded-[8px] p-3 group-hover:bg-opacity-100 transition-all duration-300 ease-in-out" />{" "}
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="form-wrapper">
              <Contactform />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
