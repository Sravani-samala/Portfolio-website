import { Link } from "react-router-dom";
import { useState } from "react";
// import useGsapAnimations from "../hooks/useGsapAnimations";
import useGsapAnimations from "../hooks/useGsapAnimations";
import useMagneticCursor from "../hooks/useMagneticCursor";
import AnimatedSvg from "../components/AnimateSVG";
import MyPhoto1 from "../assets/images/sravani-image.png";
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
import { ReactComponent as Readmore } from "../assets/icons/readmore.svg";
import Aurapro from "../assets/images/aurapro.png";
import Yazhra from "../assets/images/yazhra.png";
import Domasight from "../assets/images/domasight-banner.png";
import GrayEagle from "../assets/images/grayegale-banner.png";
import Contactform from "../components/contact-form";
import { ReactComponent as CallIcon } from "../assets/icons/call-calling.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/sms-tracking.svg";
import { ReactComponent as Whatsapp } from "../assets/icons/whatsapp.svg";
import { ReactComponent as EmailBox } from "../assets/icons/email-box.svg";
import RotatingGradientButton from "../components/RotatingGradientButton";
import LineMask from "../components/LineMask";

const Home = () => {
  useGsapAnimations();
  useMagneticCursor();

  const [activePopup, setActivePopup] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Website Development",
      description:
        "Fast, responsive, and visually engaging websites designed for smooth performance across all devices.",
      icon: <WebDevelopment className="w-full h-[220px] mb-6" />,
      popupTitle: "How I Turn Your Ideas Into Websites",
      popupContent: [
        "Business Websites",
        "Portfolio Websites",
        "Landing Pages",
        "Agency Websites",
        "Personal Branding Websites",
        "Restaurant Websites",
        "Real Estate Websites",
        "Medical & Clinic Websites",
        "Event Websites",
        "Custom UI Frontend Development",
      ],
    },
    {
      id: 2,
      title: "Custom Website Design",
      description:
        "Unique and creative website designs crafted to reflect your brand identity and business goals.",
      icon: <CustomDevelopment className="w-full h-[220px] mb-6" />,
      popupTitle: "Design Solutions I Create",
      popupContent: [
        "Modern UI/UX Design",
        "Creative Brand Identity",
        "Luxury Website Design",
        "Interactive Web Experiences",
        "Figma to Website",
        "Custom Animated Layouts",
        "Minimal & Clean Designs",
        "High Conversion Landing Pages",
        "Dark Mode Premium Websites",
        "Mobile First Design Systems",
      ],
    },
    {
      id: 3,
      title: "CMS Development",
      description:
        "Powerful CMS websites built with WordPress, Shopify, Webflow, and other modern platforms.",
      icon: <EcommerceDevelopment className="w-full h-[220px] mb-6" />,
      popupTitle: "CMS Platforms & Solutions",
      popupContent: [
        "WordPress Websites",
        "Shopify Stores",
        "Webflow Websites",
        "Wix Websites",
        "Elementor Websites",
        "Ecommerce Stores",
        "Product Showcase Websites",
        "Blog & News Websites",
        "CMS Customization",
        "SEO Friendly CMS Setup",
      ],
    },
  ];

  return (
    <main>
      {/* Custom magnetic cursor */}
      <div className="custom-cursor" aria-hidden="true"></div>
      <div className="cursor-glow"></div>
      <div className="fixed h-full top-0 left-0 right-0 z-[-1] bg-grain"></div>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="md:py-[100px] sm:py-[70px] py-[50px] relative banner-wrapper">
        <div className="bg-code absolute font-Unbounded leading-[100%] text-[30vw] top-0 bottom-0 left-0 right-0 mx-auto text-center dark:text-white text-black dark:text-opacity-[0.03] text-opacity-[0.05] z-[-1]">
          DEV
        </div>
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col gap-[50px] justify-between items-center">
            <div className="col-span-7 lg:text-start text-center">

              {/* Label line */}
              <LineMask className="sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider mb-3">
                <span className="text-secondary font-bold font-Unbounded text-base">&#123;</span>
                {" "}Introduction{" "}
                <span className="text-secondary font-bold font-Unbounded text-base">&#125;</span>
              </LineMask>

              {/* H1 — treated as one line */}
              <LineMask
                as="h1"
                innerAs="span"
                className="xl:text-[52px] lg:text-[42px] sm:text-[48px] text-4xl leading-normal font-Unbounded font-medium text-black dark:text-white max-w-[650px] block"
                innerClassName="block"
              >
                Hi, I am Sravani,{" "}
                <span className="text-secondary">Frontend</span> Developer
              </LineMask>

              <RotatingGradientButton
                href="#projects"
                gradientColor="#4ecdc4"
                backgroundColor="#000"
                className="mt-6 rounded-lg magnetic"
                spanClassName="border-[0.5px] border-[#ffffff25] rounded-lg transition-all duration-500 hover:border-[#4ecdc445]"
              >
                See projects
              </RotatingGradientButton>
            </div>

            <div className="col-span-5">
              <AnimatedSvg className="w-full h-auto banner-vector" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────── */}
      <section id="about" className="about-wrapper relative lg:py-[100px] py-[50px] code-bg">
        <div className="container mx-auto">

          <div className="col text-center mb-2">
            <LineMask className="dark:text-white text-black sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
              <span className="text-secondary font-bold font-Unbounded text-base">&#123;</span>
              {" "}Who i am{" "}
              <span className="text-secondary font-bold font-Unbounded text-base">&#125;</span>
            </LineMask>
            <LineMask
              as="h2"
              innerAs="span"
              className="dark:text-white text-black text-center md:text-[42px] sm:text-4xl text-3xl font-Unbounded leading-[normal] py-3 max-w-[767px] mx-auto block"
              innerClassName="block"
            >
              About me
            </LineMask>
          </div>

          <div className="flex md:mt-[50px] mt-[25px] lg:gap-[120px] gap-[40px] md:flex-nowrap items-start flex-wrap-reverse">
            <div className="md:w-[50%] w-full md:sticky relative md:top-14 top-0">
              <div className="relative md-mt-0 mt-5">
                <img
                  src={MyPhoto1}
                  alt="Sravani"
                  className="my-photo w-[90%] lg:ms-auto md:ms-0 ms-auto object-cover object-top rounded-[20px]"
                />
                <div className="bg-secondary lg:p-[30px] p-[18px] absolute md:-bottom-10 md:top-auto -top-7 md:left-auto left-0 lg:-right-20 md:right-0 right-auto text-center rounded-[20px] shadow-[0_5px_10px_0px_rgba(0,0,0,0.4)]">
                  <strong className="dark:text-white text-black lg:text-5xl text-4xl font-Jost">
                    03 +
                  </strong>
                  <span className="block dark:text-white text-black lg:text-lg text-base font-Jost mt-2">
                    Years Experience
                  </span>
                </div>
              </div>
            </div>

            <div className="md:w-[50%] w-full">
              <p className="dark:text-white text-black md:text-start text-center lg:text-lg text-base font-Jost text-opacity-90 mb-3">
                Hi, I'm Sravani Samala, a passionate frontend web developer with
                over 3 years of experience. I specialize in creating E-commerce,
                Informative, Static, and Dynamic websites that are
                mobile-responsive, user-friendly, SEO friendly, fast-loading with
                many more features. I'm committed to helping businesses grow
                with high-quality web solutions. I believe great websites are
                not just built; they are crafted with passion and precision.
              </p>

              <div className="flex gap-3 items-center mb-3">
                <EducationIcon className="lg:w-10 w-8 h-auto fill-secondary" />
                <LineMask
                  as="h2"
                  innerAs="span"
                  className="dark:text-white text-black text-start lg:text-[22px] text-lg font-Unbounded leading-[normal] py-3 design-heading block"
                  innerClassName="block"
                >
                  Education
                </LineMask>
              </div>
              <div className="lg:p-5 p-4 bg-secondary bg-opacity-15 rounded-[20px] border border-secondary border-opacity-35F mb-6">
                <h2 className="dark:text-white text-black font-Unbounded lg:text-lg text-base">
                  Diploma in computer science
                </h2>
                <span className="dark:text-white text-black font-Jost lg:text-base text-sm">
                  Gujarat Technological University
                </span>
              </div>

              <div className="flex gap-3 items-center mb-3">
                <ExperienceIcon className="lg:w-10 w-8 h-auto fill-secondary" />
                <LineMask
                  as="h2"
                  innerAs="span"
                  className="dark:text-white text-black text-start lg:text-[22px] text-lg font-Unbounded leading-[normal] py-3 design-heading block"
                  innerClassName="block"
                >
                  Experience
                </LineMask>
              </div>
              <div className="lg:p-5 p-4 bg-secondary bg-opacity-15 rounded-[20px] border border-secondary border-opacity-35F">
                <h2 className="dark:text-white text-black font-Unbounded lg:text-lg text-base">
                  Frontend developer &amp; Team Lead
                </h2>
                <span className="dark:text-white text-black font-Jost lg:text-base text-sm">
                  At InspireFox Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ───────────────────────────────────────────────── */}
      <section id="skills" className="skills-wrapper relative lg:py-[100px] py-[50px]">
        <div className="container mx-auto">

          <div className="col text-center">
            <LineMask className="dark:text-white text-black sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
              <span className="text-secondary font-bold font-Unbounded text-base">&#123;</span>
              {" "}What do i know{" "}
              <span className="text-secondary font-bold font-Unbounded text-base">&#125;</span>
            </LineMask>
            <LineMask
              as="h2"
              innerAs="span"
              className="dark:text-white text-black text-center md:text-[42px] sm:text-4xl text-3xl font-Unbounded leading-[normal] py-3 max-w-[767px] mx-auto block"
              innerClassName="block"
            >
              Skills
            </LineMask>
          </div>

          <div className="lg:w-[80%] w-full mx-auto mt-10">
            <div className="flex flex-grow-1 sm:gap-6 gap-3 justify-center flex-wrap">
              {[HtmlIcon, CssIcon, JsIcon, JqueryIcon, BootstrapIcon, TailwindIcon, ReactIcon, WordpressIcon, ElemetorIcon, ShopifyIcon, WixIcon, WebflowICon, SquareSpaceIcon].map((Icon, i) => (
                <div key={i} className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                  <Icon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
                </div>
              ))}
            </div>
          </div>

          <div className="col pt-24 text-center">
            <LineMask className="dark:text-white text-black sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
              <span className="text-secondary font-bold font-Unbounded text-base">&#123;</span>
              {" "}What i use{" "}
              <span className="text-secondary font-bold font-Unbounded text-base">&#125;</span>
            </LineMask>
            <LineMask
              as="h2"
              innerAs="span"
              className="dark:text-white text-black text-center md:text-[42px] sm:text-4xl text-3xl font-Unbounded leading-[normal] py-3 max-w-[767px] mx-auto block"
              innerClassName="block"
            >
              Tools
            </LineMask>
          </div>

          <div className="lg:w-[80%] w-full mx-auto mt-10">
            <div className="flex flex-grow-1 sm:gap-6 gap-3 justify-center flex-wrap">
              {[VscodeIcon, GitIcon, FigmaIcon, ChatGPTicon, GeminiIcon].map((Icon, i) => (
                <div key={i} className="skill-box bg-black bg-opacity-25 hover:bg-opacity-100 hover:-translate-y-2 cursor-pointer sm:p-8 p-6 border border-primary text-center sm:rounded-[20px] rounded-2xl">
                  <Icon className="fill-none sm:w-14 w-10 sm:h-14 h-10 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE — between Skills and Services ────────────────── */}
      <div className="marquee-section py-10 border-y border-white/5">
        {/* Row A — skill names — scrolls LEFT, solid text, 3 copies for seamless loop */}
        <div className="marquee-overflow mb-3">
          <div className="marquee-track marquee-track--left">
            {Array(3).fill(
              ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Tailwind", "React", "WordPress", "Elementor", "Shopify", "Wix", "Webflow", "Squarespace"]
            ).flat().map((name, i) => (
              <span key={i} className="marquee-item">
                {name}<span className="marquee-dot"> ✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row B — tool names — scrolls RIGHT, outline text, 3 copies */}
        <div className="marquee-overflow">
          <div className="marquee-track marquee-track--right marquee-track--outline">
            {Array(3).fill(
              ["VSCode", "Git", "Figma", "ChatGPT", "Gemini", "GSAP", "Lenis", "Tailwind CSS", "React", "Vite", "GitHub"]
            ).flat().map((name, i) => (
              <span key={i} className="marquee-item">
                {name}<span className="marquee-dot"> ✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section
        id="services"
        className="services-wrapper lg:py-[120px] py-[60px] overflow-hidden relative"
      >
        <div className="container mx-auto px-4">

          {/* Section heading */}
          <div className="text-center max-w-[750px] mx-auto mb-14">
            <LineMask className="dark:text-white text-black sm:text-sm text-xs uppercase font-Jost tracking-[3px]">
              <span className="text-secondary font-Unbounded">&#123;</span>
              {" "}What I Do{" "}
              <span className="text-secondary font-Unbounded">&#125;</span>
            </LineMask>
            <LineMask
              as="h2"
              innerAs="span"
              className="dark:text-white text-black md:text-[48px] sm:text-4xl text-3xl font-Unbounded py-4 block"
              innerClassName="block"
            >
              My Services
            </LineMask>
            <p className="dark:text-white/80 text-black/80 lg:text-lg text-base font-Jost leading-relaxed">
              I create modern, responsive, and high-performing websites with smooth
              user experiences and premium interactions.
            </p>
          </div>

          {/* Cards grid — perspective wrapper enables 3D tilt on children */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 cards-3d-perspective">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="service-card group relative rounded-[30px] border border-white/10 bg-[#0f0f0f] overflow-hidden p-8 transition-all duration-300"
              >
                {/* Gloss shine — GSAP moves this on mouse-move */}
                <div className="card-shine"></div>
                <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-500"></div>
                <div className="relative z-10">
                  {service.icon}
                  <h3 className="text-white font-Unbounded text-[28px] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/80 font-Jost text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <RotatingGradientButton
                    onClick={() => setActivePopup(service)}
                    gradientColor="#4ecdc4"
                    backgroundColor="#000"
                    className="mt-4 rounded-lg magnetic"
                    spanClassName="border-[0.5px] border-[#ffffff25] rounded-lg transition-all duration-500 hover:border-[#4ecdc445]"
                  >
                    Explore Services
                  </RotatingGradientButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popup */}
        {activePopup && (
          <div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePopup(null)}
          >
            <div
              className="relative bg-[#111] border border-white/10 rounded-[30px] max-w-[700px] w-full p-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute w-[300px] h-[300px] bg-secondary/20 blur-[120px] rounded-full -top-20 -right-20"></div>
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-5 right-5 text-white text-2xl"
              >
                ✕
              </button>
              <div className="relative z-10">
                <h2 className="text-white font-Unbounded md:text-[36px] text-[28px] mb-4">
                  {activePopup.popupTitle}
                </h2>
                <p className="text-white/70 font-Jost mb-8 leading-relaxed">
                  Every business has unique goals and ideas. I transform those ideas
                  into modern digital experiences with strategy, creativity, and
                  performance-focused development.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {activePopup.popupContent.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-Jost hover:border-secondary transition-all duration-300 hover:-translate-y-1"
                    >
                      ✦ {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="https://wa.me/8469259994?text=Hi%20I%20want%20to%20discuss%20my%20website%20project"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-secondary text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Let's Discuss Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────────── */}
      <section id="projects" className="projects-wrapper relative lg:pt-[50px] lg:pb-[100px] pb-[70px]">
        <div className="container mx-auto">
          <div className="col mb-8 text-center">
            <LineMask className="dark:text-white text-black sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
              <span className="text-secondary font-bold font-Unbounded text-base">&#123;</span>
              {" "}What I have Done ?{" "}
              <span className="text-secondary font-bold font-Unbounded text-base">&#125;</span>
            </LineMask>
            <LineMask
              as="h2"
              innerAs="span"
              className="dark:text-white text-black text-center font-Unbounded md:text-[42px] sm:text-4xl text-3xl leading-[normal] py-3 max-w-[767px] mx-auto block"
              innerClassName="block"
            >
              My Projects
            </LineMask>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 cards-3d-perspective">
                        {/* Card 2 */}
            <div className="project-box cursor-pointer bg-black bg-opacity-70 lg:p-5 p-5 project-boxy border border-opacity-25 border-secondary rounded-[24px] text-center relative">
              <div className="card-shine"></div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <HtmlIcon className="w-10 h-10" />
                  <div className="col-span-2 text-left">
                    <h3 className="dark:text-white text-black font-Jost text-lg">Product Landing Page</h3>
                    <p className="dark:text-white text-black text-[12px] font-Jost uppercase mt-1">
                      HTML | CSS | JS
                    </p>
                  </div>
                </div>
                <Link
                  to="https://sravani-samala.github.io/aura-pro/"
                  target="_blank"
                  className="bg-secondary dark:text-black text-white font-Jost text-base group px-4 py-2 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white"
                >
                  Visit{" "}
                  <Readmore className="dark:fill-black fill-white w-[16px] h-auto group-hover:fill-white transition-all duration-300 ease-in-out" />
                </Link>
              </div>
              <img src={Aurapro} alt="Product landing page" className="w-full mt-6 h-auto object-cover project-image" />
            </div>

            {/* Card 3 */}
            <div className="project-box cursor-pointer bg-black bg-opacity-70 lg:p-5 p-5 project-boxy border border-opacity-25 border-secondary rounded-[24px] text-center relative">
              <div className="card-shine"></div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <HtmlIcon className="w-10 h-10" />
                  <div className="col-span-2 text-left">
                    <h3 className="dark:text-white text-black font-Jost text-lg">Ecommerce Website</h3>
                    <p className="dark:text-white text-black text-[12px] font-Jost uppercase mt-1">
                      Shopify
                    </p>
                  </div>
                </div>
                <Link
                  to="http://yazhraclothing.in/"
                  target="_blank"
                  className="bg-secondary dark:text-black text-white font-Jost text-base group px-4 py-2 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white"
                >
                  Visit{" "}
                  <Readmore className="dark:fill-black fill-white w-[16px] h-auto group-hover:fill-white transition-all duration-300 ease-in-out" />
                </Link>
              </div>
              <img src={Yazhra} alt="Ecommerce website" className="w-full mt-6 h-auto object-cover project-image" />
            </div>

             {/* Card 4 */}
            <div className="project-box cursor-pointer bg-black bg-opacity-70 lg:p-5 p-5 project-boxy border border-opacity-25 border-secondary rounded-[24px] text-center relative">
              <div className="card-shine"></div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <HtmlIcon className="w-10 h-10" />
                  <div className="col-span-2 text-left">
                    <h3 className="dark:text-white text-black font-Jost text-lg">Bussiness Website</h3>
                    <p className="dark:text-white text-black text-[12px] font-Jost uppercase mt-1">
                      Wordpress | Elementor
                    </p>
                  </div>
                </div>
                <Link
                  to="https://domasight.com/"
                  target="_blank"
                  className="bg-secondary dark:text-black text-white font-Jost text-base group px-4 py-2 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white"
                >
                  Visit{" "}
                  <Readmore className="dark:fill-black fill-white w-[16px] h-auto group-hover:fill-white transition-all duration-300 ease-in-out" />
                </Link>
              </div>
              <img src={Domasight} alt="Bussiness website" className="w-full mt-6 h-auto object-cover project-image" />
            </div>

            {/* Card 4 */}
            <div className="project-box cursor-pointer bg-black bg-opacity-70 lg:p-5 p-5 project-boxy border border-opacity-25 border-secondary rounded-[24px] text-center relative">
              <div className="card-shine"></div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <HtmlIcon className="w-10 h-10" />
                  <div className="col-span-2 text-left">
                    <h3 className="dark:text-white text-black font-Jost text-lg">Bussiness Website</h3>
                    <p className="dark:text-white text-black text-[12px] font-Jost uppercase mt-1">
                      Wordpress | Elementor
                    </p>
                  </div>
                </div>
                <Link
                  to="https://grayeaglepainting.com/"
                  target="_blank"
                  className="bg-secondary dark:text-black text-white font-Jost text-base group px-4 py-2 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white"
                >
                  Visit{" "}
                  <Readmore className="dark:fill-black fill-white w-[16px] h-auto group-hover:fill-white transition-all duration-300 ease-in-out" />
                </Link>
              </div>
              <img src={GrayEagle} alt="Bussiness website" className="w-full mt-6 h-auto object-cover project-image" />
            </div>

            {/* Card 1 */}
            <div className="project-box cursor-pointer bg-black bg-opacity-70 lg:p-5 p-5 project-boxy border border-opacity-25 border-secondary rounded-[24px] text-center relative">
              <div className="card-shine"></div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <HtmlIcon className="w-10 h-10" />
                  <div className="col-span-2 text-left">
                    <h3 className="dark:text-white text-black font-Jost text-lg">Portfolio</h3>
                    <p className="dark:text-white text-black text-[12px] font-Jost uppercase mt-1">
                      React | Tailwind | GSAP
                    </p>
                  </div>
                </div>
                <Link
                  to="#"
                  className="bg-secondary dark:text-black text-white font-Jost text-base group px-4 py-2 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 hover:bg-primary"
                >
                  Visit{" "}
                  <Readmore className="dark:fill-black fill-white w-[16px] h-auto group-hover:fill-white transition-all duration-300 ease-in-out" />
                </Link>
              </div>
              <img src={Aurapro} alt="Portfolio project" className="w-full mt-6 h-auto object-cover project-image" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" className="contact-wrapper relative lg:pb-[100px] pb-[70px]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 sm:gap-10 gap-5 mt-[50px] items-center">
            <div className="relative">
              <EmailBox className="w-[50%] h-auto email-box absolute opacity-5 -right-0 bottom-0" />

              <LineMask className="dark:text-white text-black text-start sm:text-sm text-xs uppercase font-Jost font-normal tracking-wider">
                <span className="text-secondary font-bold font-Unbounded text-base">&#123;</span>
                {" "}Let's Talk about ideas{" "}
                <span className="text-secondary font-bold font-Unbounded text-base">&#125;</span>
              </LineMask>
              <LineMask
                as="h2"
                innerAs="span"
                className="dark:text-white text-black text-start md:text-[42px] sm:text-4xl text-3xl capitalize font-Unbounded leading-[normal] py-3 block"
                innerClassName="block"
              >
                Get in touch
              </LineMask>

              <div className="info-wrapper">
                <div className="grid grid-cols-1 sm:gap-8 gap-5 my-5">
                  <a
                    href="tel:8469259994"
                    className="text-start flex gap-4 items-center dark:text-white text-black sm:text-xl text-base font-Jost font-bold group hover:text-accent transition-all duration-300 ease-in-out break-all"
                  >
                    <CallIcon className="dark:fill-white fill-secondary group-hover:fill-white dark:text-white text-black bg-secondary bg-opacity-15 border border-secondary sm:w-16 sm:h-16 w-12 h-12 rounded-[8px] p-3 group-hover:bg-opacity-100 transition-all duration-300 ease-in-out" />
                    {" "}8469259994
                  </a>
                  <a
                    href="mailto:sravanisamala79884@gmail.com"
                    className="text-start flex gap-4 items-center dark:text-white text-black sm:text-xl text-base font-Jost font-bold group hover:text-accent transition-all duration-300 ease-in-out break-all"
                  >
                    <EmailIcon className="dark:fill-white fill-secondary group-hover:fill-white dark:text-white text-black bg-secondary bg-opacity-15 border border-secondary sm:w-16 sm:h-16 w-12 h-12 rounded-[8px] p-3 group-hover:bg-opacity-100 transition-all duration-300 ease-in-out" />
                    {" "}sravanisamala79884@gmail.com
                  </a>
                  <a
                    href="https://wa.me/8469259994?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20developed%20(HTML%2FWordPress%2FShopify).%20Can%20we%20discuss%20my%20project%3F"
                    className="text-start flex gap-4 items-center dark:text-white text-black sm:text-xl text-base font-Jost font-bold group hover:text-accent transition-all duration-300 ease-in-out break-all"
                  >
                    <Whatsapp className="dark:fill-white fill-secondary group-hover:fill-white dark:text-white text-black bg-secondary bg-opacity-15 border border-secondary sm:w-16 sm:h-16 w-12 h-12 rounded-[8px] p-3 group-hover:bg-opacity-100 transition-all duration-300 ease-in-out" />
                    {" "}Chat on WhatsApp
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
