/* eslint-disable react/no-unescaped-entities */

const Home = () => {
  return (
    <div className="text-black">
      <div className=" w-full relative bg-amber-500 h-full">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center p-4 md:p-16">
          {/* title */}
          <div className=" text-3xl md:text-4xl font-bold">
            <h1 className=" font-serif">Best Chinese Food in Dhaka</h1>
            <h3 className=" text-lg font-thin">
              Are you looking for eco-friendly restaurant in Dhaka? Check out
              Napoles-Pasta.
            </h3>
            <div className="flex mt-6 text-lg w-full text-center items-center justify-center md:justify-start">
              <button className=" md:btn-success w-fit justify-center h-14  bg-lime-400 p-4 rounded-xl shadow-2xl mr-4 hover:scale-105 hover:bg-lime-600">
                Order Now
              </button>
              <button className=" md:btn-success w-fit flex items-center justify-center h-14 border-4 rounded-xl shadow-2xl p-4 text-[#EBEBEB] ml-4 hover:scale-105 hover:bg-gray-600">
                Book a Table
              </button>
            </div>
          </div>
          {/* image */}
          <div className=" w-2/3 ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/144/762/original/tasty-fried-noodles-on-transparent-background-png.png"
              alt=""
              className=" hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div>
        <div className=" md:text-5xl font-serif text-center w-full md:m-10 m-4 font-semibold md:mt-20">
          <h1>We Offer Top Notch !!</h1>
        </div>
        {/* three items section */}
        <div className="md:flex justify-between flex-row items-center mt-6 mb-6 p-4 md:p-12 md:pt-16 md:pb-16 text-white">
          <div className=" bg-[#094d0b] w-1/2 h-fit m-4 rounded-lg shadow-2xl hover:scale-105">
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/021/950/189/small_2x/breakfast-sandwich-isolated-on-a-transparent-background-png.png"
                alt=""
              />
            </div>
            <div className="text-center p-2">
              <h1 className="text-2xl font-mono font-semibold">Breakfast</h1>
              <h3>
                An export specialist with more than{" "}
                <span className=" line-clamp-2">Food group will work with</span>
              </h3>
            </div>
            <div className="text-center mb-6 font-bold text-blue-500 hover:scale-105">
              <a href="#">View More</a>
            </div>
          </div>
          <div className=" bg-[#1F363D] w-1/2 h-fit m-4 rounded-lg shadow-2xl hover:scale-105">
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/021/950/189/small_2x/breakfast-sandwich-isolated-on-a-transparent-background-png.png"
                alt=""
              />
            </div>
            <div className="text-center p-2">
              <h1 className="text-2xl font-mono font-semibold">Appetizers</h1>
              <h3>
                An export specialist with more than{" "}
                <span className=" line-clamp-2">Food group will work with</span>
              </h3>
            </div>
            <div className="text-center mb-6 font-bold text-blue-500 hover:scale-105">
              <a href="#">View More</a>
            </div>
          </div>
          <div className=" bg-[#512525] w-1/2 h-fit m-4 rounded-lg shadow-2xl hover:scale-105">
            <div className="w-full">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/021/950/189/small_2x/breakfast-sandwich-isolated-on-a-transparent-background-png.png"
                alt=""
              />
            </div>
            <div className="text-center p-2">
              <h1 className="text-2xl font-mono font-semibold">Desserts</h1>
              <h3>
                An export specialist with more than{" "}
                <span className=" line-clamp-2">Food group will work with</span>
              </h3>
            </div>
            <div className="text-center mb-6 font-bold text-blue-500 hover:scale-105">
              <a href="#">View More</a>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="mt-24 mb-6 w-full h-fit pt-8 pb-16 relative bg-[#FEF5EF]">
        <div className="md:flex hidden justify-center items-center">
          <div className=" w-1/4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/249/029/non_2x/happy-kind-hamburger-cartoon-character-on-transparent-background-for-decorating-projects-png.png"
              alt=""
            />
          </div>

          <div className="text-center flex justify-center items-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/025/002/346/small_2x/cute-cartoon-chef-character-on-transparent-background-generative-ai-png.png"
              alt=""
            />
          </div>
        </div>
        <div className="pt-2 text-center w-full flex justify-center items-center font-thin text-3xl md:text-7xl">
          <h1 id="target">
            <span className=" text-red-600 font-bold text-5xl">"</span> Good
            things come to those{" "}
            <span className=" line-clamp-2">
              who for others{" "}
              <span className=" text-red-600 font-bold text-5xl">"</span>
            </span>{" "}
          </h1>
        </div>
      </div>

      {/* fourth section */}
      <div className="w-full h-fit mb-8 pt-10 pb-10">
        <div className="text-center text-3xl text-red-600 md:text-7xl font-serif mb-10">
          <h1>Hot Item This Week</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="hover:scale-105">
            <img
              src="https://www.pngarts.com/files/3/Pizza-PNG-Image.png"
              alt=""
            />
          </div>
          <div className="md:pl-6 pl-3">
            <h1 className="font-sans md:text-5xl text-3xl ">
              Margaritta pizza
            </h1>
            <h3 className="font-light text-xl mt-3 mb-3">
              Best Italian pizza you can ever imagine. Comes with with exciting
              price <span>399Tk.</span>
            </h3>
            <button className="btn-success bg-lime-500 shadow-2xl text-white p-4  font-bold hover:bg-lime-700 hover:scale-105 rounded-md">
              Get Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
