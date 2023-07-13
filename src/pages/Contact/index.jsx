import Header from "../../components/Header";

const Contact = () => {
  return (
    <div className="home h-[100vh] bg-[#2A5461]">
      <Header />
      <main className="main flex h-3/4">
        <div className="main container mx-auto">
          <div className="main-body h-full flex flex-col items-center justify-center gap-y-6">
            <h1 className="main-body__title text-[42px] text-white">
              Here is my some learned skills
            </h1>
            <ul>
              <li>HTML</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
