import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    Fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.Fullname || !formData.email || !formData.phone || !formData.message) {
        alert("Please fill all the fields.");
        return;
    }

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({
          Fullname: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message, please try again later.");
      });
  };
  return (
    <div className="tracking-wide leading-6 flex flex-col md:flex-row">
      <div className="w-2/5 space-y-4">
        <h1 className="text-lg text-white font-medium underline decoration-wavy underline-offset-8">
          Get in Touch
        </h1>
        <p className="text-[#9CA3AF] text-base font-normal">
          If you have any inquiries, please feel free to reach out. You can
          contact us via email at{" "}
          <a href="mailto:shikhar.varshney2003@gmail.com" className="text-white hover:underline  hover:underline-offset-8">shikhar.varshney2003@gmail.com</a>
        </p>
        <p className="text-white text-base font-normal">Follow me</p>
        <div className="flex gap-4 text-white">
          <a href="https://github.com/shikhar-4739" target="_blank" rel="noopener noreferrer" className="tooltip">
          <div className="border h-10 w-10 p-2.5 border-[#27272A] rounded-xl hover:bg-gray-400">
            <FiGithub className="h-full w-full" />
            <span className="tooltiptext text-sm font-semibold">GitHub</span>
          </div>
          </a>
          <a href="https://twitter.com/ShikharVar77009" target="_blank" rel="noopener noreferrer" className="tooltip">
          <div className="border h-10 w-10 p-2.5 border-[#27272A] rounded-xl hover:bg-[#1DA1F2]">
            <FaXTwitter className="h-full w-full" />
            <span className="tooltiptext text-sm font-semibold">Twitter</span>
          </div>
          </a>
          <a href="https://linkedin.com/in/shikhar-varshney-59897a270/" target="_blank" rel="noopener noreferrer" className="tooltip">
          <div className="border h-10 w-10 p-2.5 border-[#27272A] rounded-xl hover:bg-blue-700">
            <FaLinkedinIn className="h-full w-full" />
            <span className="tooltiptext text-sm font-semibold">LinkedIn</span>
          </div>
          </a>
          <a href="https://instagram.com/shikhar_4739" target="_blank" rel="noopener noreferrer" className="tooltip">
          <div className="border h-10 w-10 p-2.5 border-[#27272A] rounded-xl hover:bg-gradient-to-r from-rose-400 to-red-500">
            <FaInstagram className="h-full w-full" />
            <span className="tooltiptext text-sm font-semibold">Instagram</span>
          </div>
          </a>
        </div>
      </div>

      <div className="w-3/5 order-2 xl:order-none text-[#9CA3AF] ">
        <form
          className="flex flex-col gap-3 pl-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              name="Fullname"
              placeholder="Fullname"
              value={formData.Fullname}
              onChange={handleChange}
              className="border rounded-xl border-[#27272A]"
            />
            <Input
              type="phone"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-xl border-[#27272A]"
            />
          </div>
          <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
                className="border rounded-xl border-[#27272A]"
            />
          <Textarea
            name="message"
            className="h-[100px] border rounded-xl border-[#27272A]"
            placeholder="Type your message here."
            value={formData.message}
            onChange={handleChange}
          />
          <Button className="w-full bg-white text-black p-2 rounded-xl hover:bg-white hover:text-black">
            Send 
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
