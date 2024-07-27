import { useState } from "react";
import Swal from "sweetalert2";

const BookTable = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    seat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Clear the form
    setFormData({
      email: "",
      name: "",
      seat: "",
    });
    Swal.fire({
      title: "Done!",
      text: "Submitted",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-white opacity-40"></div>
      <div className="h-full w-full" style={backgroundImageStyle}>
        <form onSubmit={handleSubmit}>
          <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                  <div>
                    <h1 className="text-2xl text-black font-semibold">
                      Login Form with Floating Labels
                    </h1>
                  </div>
                  <div className="divide-y divide-gray-50">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative bg-slate-200">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          value={formData.email}
                          onChange={handleChange}
                          className="peer bg-slate-200 rounded-sm px-2 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder=" Email address"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Email Address
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="peer bg-slate-200 rounded-sm px-2 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder=" Name"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          id="seat"
                          name="seat"
                          type="number"
                          value={formData.seat}
                          onChange={handleChange}
                          className="peer bg-slate-200 rounded-sm px-2 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder=" Seat No"
                        />
                        <label
                          htmlFor="seat"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Seat NO
                        </label>
                      </div>
                      <div className="relative">
                        <button
                          type="submit"
                          className="bg-blue-500 text-white rounded-md px-2 py-1"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
