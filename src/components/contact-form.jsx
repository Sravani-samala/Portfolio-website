import React, { useState } from "react";
import RotatingGradientButton from "./RotatingGradientButton";

function Contactform() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "dbf173cc-0e66-4381-a370-e010f3945c2a"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(
            Object.fromEntries(formData)
          ),
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully ✅");
        event.target.reset();
      } else {
        console.log(data);
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      console.log(error);
      setResult("Network error ❌");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="dark:bg-white bg-black dark:bg-opacity-5 bg-opacity-20 sm:p-8 p-5 rounded-3xl w-full"
    >
      {/* NAME */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        autoComplete="off"
        className="text-start dark:bg-white bg-black dark:bg-opacity-5 bg-opacity-20 dark:text-white text-black px-4 py-3 w-full capitalize rounded-[6px] outline-none dark:placeholder:text-white/50 placeholder:text-black/50 font-Jost font-medium mb-4"
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        autoComplete="off"
        className="text-start dark:bg-white bg-black dark:bg-opacity-5 bg-opacity-20 dark:text-white text-black px-4 py-3 w-full rounded-[6px] outline-none dark:placeholder:text-white/50 placeholder:text-black/50 font-Jost font-medium mb-4"
      />

      {/* PHONE */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        autoComplete="off"
        className="text-start dark:bg-white bg-black dark:bg-opacity-5 bg-opacity-20 dark:text-white text-black px-4 py-3 w-full rounded-[6px] outline-none dark:placeholder:text-white/50 placeholder:text-black/50 font-Jost font-medium mb-4"
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Drop Your Message"
        required
        autoComplete="off"
        className="min-h-[120px] text-start dark:bg-white bg-black dark:bg-opacity-5 bg-opacity-20 dark:text-white text-black px-4 py-3 w-full rounded-[6px] outline-none dark:placeholder:text-white/50 placeholder:text-black/50 font-Jost font-medium mb-4"
      ></textarea>

      {/* BUTTON */}
      <RotatingGradientButton
        type="submit"
        disabled={loading}
        gradientColor="#4ecdc4"
        backgroundColor="#000"
        className="rounded-lg w-full"
        spanClassName="border-[0.5px] border-[#ffffff25] rounded-lg transition-all duration-500 hover:border-[#4ecdc445]"
      >
        {loading ? "Sending..." : "Submit"}
      </RotatingGradientButton>

      {/* RESULT */}
      {result && (
        <p className="mt-4 text-sm font-medium dark:text-white text-black">
          {result}
        </p>
      )}
    </form>
  );
}

export default Contactform;