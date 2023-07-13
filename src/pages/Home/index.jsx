import Header from "../../components/Header";
import "./main.css";

const Home = () => {
  return (
    <div className="home h-[100vh] bg-[#f66d69]  slide-right">
      <Header />
      <main className="main flex h-3/4 slide-top">
        <div className="main container mx-auto">
          <div className="main-body h-full flex flex-col items-center justify-center gap-y-6">
            <h1 className="main-body__title text-[42px] text-white">
              Hey I am Abrorbek Abdulxamidov
            </h1>
            <p className="main-body__subtitle text-[28px] text-[#d9cac5]">
              I am a FrontEnd developer
            </p>
            <div className="main-actions flex gap-x-6">
              <button className="main-body__btn w-36 bg-transparent hover:bg-[#01908c] text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                See my works
              </button>
              <button className="main-body__btn w-36 hover:bg-transparent bg-[#01908c] text-white font-semibold hover:text-white py-2 px-4 hover:border hover:border-white hover:border-transparent rounded">
                Say hello🖐🏻
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
