import Header from "../../components/Header";
import "./main.css";

const Skills = () => {

  return (
    <div className="home h-[100vh] bg-[#01918d] slide-top">
      <Header />
      <main className="main flex h-3/4">
        <div className="main container mx-auto">
          <div className="main-body h-full slide-left flex flex-col items-center justify-center gap-y-6">
            <h1 className="main-body__title text-[42px] text-white">
              My skills
            </h1>
            <ul className="list-items grid grid-cols-5 gap-x-4 gap-y-6 justify-center place-content-center">
              <li className="list-item  bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                HTML
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                CSS
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Javascript
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                C++
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                React
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Bootstrap
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Tailwind CSS
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Material UI
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Redux
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Redux Toolkit
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Node JS
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Express JS
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Version Control
              </li>
              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Leaflet
              </li>

              <li className="list-item bg-slate-100 px-4 py-2 text-center rounded-md shadow hover:shadow-lg hover:animate-skill hover:cursor-pointer">
                Telegram Bot
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
