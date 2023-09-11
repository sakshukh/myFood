const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Contact us</h1>
      <form className="flex flex-col items-center">
        <input
          type="text"
          className="border border-black rounded p-2 m-2 w-6/12"
          placeholder="Your Name"
        />
        <textarea
          className="border border-black rounded w-6/12 m-2 p-2 "
          placeholder="Write your Query"
          rows={5}
        />
        <button className="rounded rounde-lg bg-black text-white w-1/12 m-2 p-2 hover:bg-gray-100 hover:text-black hover:border hover:border-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
