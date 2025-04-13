import React from "react";

function Contactform() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dbf173cc-0e66-4381-a370-e010f3945c2a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    } else {
      console.log("Error", res);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-3xl bg-opacity-5 mb-6 w-full "
      >
        <div className="col-12 relative">
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            className="text-start bg-white bg-opacity-5 text-white px-4 py-3 w-full capitalize rounded-[6px] outline-none placeholder:text-white/50 font-Jost font-medium mb-4"
          />
        </div>
        <div className="col-12">
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="text-start bg-white bg-opacity-5 text-white px-4 py-3 w-full capitalize rounded-[6px] outline-none placeholder:text-white/50 font-Jost font-medium mb-4"
          />
        </div>
        <div className="col-12">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            autoComplete="off"
            className="text-start bg-white bg-opacity-5 text-white px-4 py-3 w-full capitalize rounded-[6px] outline-none placeholder:text-white/50 font-Jost font-medium mb-4"
          />
        </div>
        <div className="col-12">
          <textarea
            name="message"
            placeholder="Drop Your message"
            autoComplete="off"
            className="min-h-[120px] text-start bg-white bg-opacity-5 text-white px-4 py-3 w-full capitalize rounded-[6px] outline-none placeholder:text-white/50 font-Jost font-medium mb-4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn-grad text-primary uppercase font-Jost font-semibold"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Contactform;
