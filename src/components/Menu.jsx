const Menu = () => {
  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="text-center text-black">
          <h1 className="text-5xl md:text-7xl font-serif">
            This Week's Top Recipes
          </h1>
          <p className="font-thin text-lg  pt-4">
            Food nourishes our bodies, brings joy, connects cultures, and
            enhances every occasion with delightful flavors.{" "}
            <span className=" line-clamp-2">
              Food nourishes our bodies, brings joy, connects cultures, and
              enhances.
            </span>
          </p>
        </div>
        <div className="md:grid grid-cols-3 gap-5 text-black p-4 md:p-20 ml-10 mr-10">
          <div className="w-1/2 h-fit bg-gray-200 rounded-md pt-0 pb-6">
            <img
              src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg"
              alt=""
            />
            <div className="text-center pt-4">
              <h1 className="text-2xl ">Potato Wedges</h1>
              <h3 className="text-normal font-thin">
                Cook: 30 mins <span>American Food Items</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
