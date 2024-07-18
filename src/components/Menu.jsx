import Menu_component from "./Menu_component";

const Menu = () => {
  const details = [
    {
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      name: "Salad",
      title: "Best food in the the country",
      catagorie1: "Italian",
      catagorie2: "French",
    },
    {
      img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
      name: "French Fries",
      title: "Best food in the the country",
      catagorie1: "Italian",
      catagorie2: "French",
    },
    {
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      name: "Salad",
      title: "Best food in the the country",
      catagorie1: "Italian",
      catagorie2: "French",
    },
    {
      img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
      name: "Potato Wedges",
      title: "Best food in the the country",
      catagorie1: "Italian",
      catagorie2: "French",
    },
    {
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      name: "Salad",
      title: "Best food in the the country",
      catagorie1: "Italian",
      catagorie2: "French",
    },
    {
      img: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
      name: "French Fries",
      title: "Best food in the the country",
      catagorie1: "Italian",
      catagorie2: "French",
    },
  ];
  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="text-center text-black flex flex-col justify-center items-center">
          <div className="w-1/2 border-2 text-center bg-[#ffd622] p-6 rounded-ss-full rounded-ee-full">
            <h1 className="text-5xl md:text-7xl font-serif">
              This Week Top Recipes
            </h1>
          </div>
          <p className="font-thin text-lg  pt-4">
            Food nourishes our bodies, brings joy, connects cultures, and
            enhances every occasion with delightful flavors.{" "}
            <span className=" line-clamp-2">
              Food nourishes our bodies, brings joy, connects cultures, and
              enhances.
            </span>
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-black p-4 md:p-20 ml-10 mr-10">
          {details.map((item, idx) => (
            <Menu_component key={idx} detail={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
