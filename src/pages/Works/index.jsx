import Header from "../../components/Header";
import Nature from "../../assets/nature.jpg";
import CodeIcon from "../../assets/icons/code.svg";
import DemoIcon from "../../assets/icons/demo.svg";
import "./main.css";
import DownloadBtn from "../../components/Downloader";

const Works = () => {
  const activateOpacity = () => {
    const elCards = document.querySelectorAll(".card");
    elCards.forEach((card) => card.classList.remove("opacity-50"));
  };

  const disableOpacity = () => {
    const elCards = document.querySelectorAll(".card");
    elCards.forEach((card) => card.classList.add("opacity-50"));
  };

  const handleHover = (className) => {
    const elCard = document.querySelector(`.${className}`);
    disableOpacity();
    elCard.classList.add("shadow-lg", "-translate-y-2", "opacity-100");
  };

  const handleAfterHover = (className) => {
    const elCard = document.querySelector(`.${className}`);
    activateOpacity();
    elCard.classList.remove("shadow-lg", "-translate-y-2", "opacity-100");
  };

  return (
    <div className="home min-h-[100vh] bg-[#071952] slide-top">
      <Header />
      <main className="main flex h-3/4">
        <div className="main container mx-auto relative">
          <div className="main-body h-full flex flex-col items-center justify-center gap-6">
            <h1 className="main-body__title text-[48px] text-white tracking-wider mb-5">
              Projects
            </h1>
            <ul className="cards grid grid-cols-4 gap-4 px-9">
              <li
                onMouseOver={() => handleHover("card-1")}
                onMouseLeave={() => handleAfterHover("card-1")}
                className="card card-1  rounded-sm overflow-hidden bg-white transition-all"
              >
                <div className="card-image">
                  <img
                    src={Nature}
                    alt="project image"
                    className="card-image__self p-1"
                  />
                </div>
                <div className="card-body py-2 px-4">
                  <h3 className="card-body__title text-center text-[22px] font-semibold mb-2">
                    Project name
                  </h3>
                  <p className="card-body__text text-center mb-5 text-[18px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi saepe sint laudantium.
                  </p>
                  <ul className="card-body__feautures flex justify-center gap-x-2 mb-4">
                    <li className="font-semibold">Sass</li>
                    <li className="font-semibold">React</li>
                    <li className="font-semibold">Material UI</li>
                  </ul>
                  <div className="card-body__links flex justify-center gap-x-4 items-center">
                    <a
                      href="#"
                      className="card-body__link-github transition-transform  hover:-translate-y-1"
                      title="Show demo"
                    >
                      <img src={DemoIcon} alt="demo url" className="w-9" />
                    </a>
                    <a
                      href="#"
                      className="card-body__link-code transition-transform  hover:-translate-y-1"
                      title="Show code"
                    >
                      <img src={CodeIcon} alt="source url" className="w-8" />
                    </a>
                  </div>
                </div>
              </li>
              <li
                onMouseOver={() => handleHover("card-2")}
                onMouseLeave={() => handleAfterHover("card-2")}
                className="card card-2  rounded-sm overflow-hidden bg-white transition-all"
              >
                <div className="card-image">
                  <img
                    src={Nature}
                    alt="project image"
                    className="card-image__self p-1"
                  />
                </div>
                <div className="card-body py-2 px-4">
                  <h3 className="card-body__title text-center text-[22px] font-semibold mb-2">
                    Project name
                  </h3>
                  <p className="card-body__text text-center mb-5 text-[18px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi saepe sint laudantium.
                  </p>
                  <ul className="card-body__feautures flex justify-center gap-x-2 mb-4">
                    <li className="font-semibold">Sass</li>
                    <li className="font-semibold">React</li>
                    <li className="font-semibold">Material UI</li>
                  </ul>
                  <div className="card-body__links flex justify-center gap-x-4 items-center">
                    <a
                      href="#"
                      className="card-body__link-github transition-transform  hover:-translate-y-1"
                      title="Show demo"
                    >
                      <img src={DemoIcon} alt="demo url" className="w-9" />
                    </a>
                    <a
                      href="#"
                      className="card-body__link-code transition-transform  hover:-translate-y-1"
                      title="Show code"
                    >
                      <img src={CodeIcon} alt="source url" className="w-8" />
                    </a>
                  </div>
                </div>
              </li>
              <li
                onMouseOver={() => handleHover("card-3")}
                onMouseLeave={() => handleAfterHover("card-3")}
                className="card card-3  rounded-sm overflow-hidden bg-white transition-all"
              >
                <div className="card-image">
                  <img
                    src={Nature}
                    alt="project image"
                    className="card-image__self p-1"
                  />
                </div>
                <div className="card-body py-2 px-4">
                  <h3 className="card-body__title text-center text-[22px] font-semibold mb-2">
                    Project name
                  </h3>
                  <p className="card-body__text text-center mb-5 text-[18px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi saepe sint laudantium.
                  </p>
                  <ul className="card-body__feautures flex justify-center gap-x-2 mb-4">
                    <li className="font-semibold">Sass</li>
                    <li className="font-semibold">React</li>
                    <li className="font-semibold">Material UI</li>
                  </ul>
                  <div className="card-body__links flex justify-center gap-x-4 items-center">
                    <a
                      href="#"
                      className="card-body__link-github transition-transform  hover:-translate-y-1"
                      title="Show demo"
                    >
                      <img src={DemoIcon} alt="demo url" className="w-9" />
                    </a>
                    <a
                      href="#"
                      className="card-body__link-code transition-transform  hover:-translate-y-1"
                      title="Show code"
                    >
                      <img src={CodeIcon} alt="source url" className="w-8" />
                    </a>
                  </div>
                </div>
              </li>
              <li
                onMouseOver={() => handleHover("card-4")}
                onMouseLeave={() => handleAfterHover("card-4")}
                className="card card-4  rounded-sm overflow-hidden bg-white transition-all"
              >
                <div className="card-image">
                  <img
                    src={Nature}
                    alt="project image"
                    className="card-image__self p-1"
                  />
                </div>
                <div className="card-body py-2 px-4">
                  <h3 className="card-body__title text-center text-[22px] font-semibold mb-2">
                    Project name
                  </h3>
                  <p className="card-body__text text-center mb-5 text-[18px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi saepe sint laudantium.
                  </p>
                  <ul className="card-body__feautures flex justify-center gap-x-2 mb-4">
                    <li className="font-semibold">Sass</li>
                    <li className="font-semibold">React</li>
                    <li className="font-semibold">Material UI</li>
                  </ul>
                  <div className="card-body__links flex justify-center gap-x-4 items-center">
                    <a
                      href="#"
                      className="card-body__link-github transition-transform  hover:-translate-y-1"
                      title="Show demo"
                    >
                      <img src={DemoIcon} alt="demo url" className="w-9" />
                    </a>
                    <a
                      href="#"
                      className="card-body__link-code transition-transform  hover:-translate-y-1"
                      title="Show code"
                    >
                      <img src={CodeIcon} alt="source url" className="w-8" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Works;
