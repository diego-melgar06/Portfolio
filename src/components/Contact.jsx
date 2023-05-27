const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="h-screen w-full bg-fnThird flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 ">
          <form className="bg-gray-800 p-10 rounded-lg shadow-lg min-w-full">
            <h2 className="text-center  text-2xl mb-6  font-bold ">
              Contact Form
            </h2>
            <div>
              <label className="text-gray-200 font-semibold block my-3 text-md">
                Username
              </label>
              <input
                className="w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </div>
            <div>
              <label className="text-gray-200 font-semibold block my-3 text-md">
                Email
              </label>
              <input
                className="w-full text-gray-500 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="@email"
              />
            </div>
            <div className="col-span-2 mt-7">
              <textarea
                cols="30"
                rows="8"
                className="rounded-lg text-gray-500  border-gray-400 border-2 p-3 md:text-xl w-full focus:outline-none"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-[#574fc7] rounded-lg  px-4 py-2 text-lg text-white tracking-wide font-semibold "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
