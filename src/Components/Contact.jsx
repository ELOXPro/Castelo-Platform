import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { PrimaryButton } from "./UI/UserInterface"

export const Contact = () => {
    return (
      <div className="flex flex-col py-10 md:pt-20 w-full h-full gap-4 px-2 md:px-4 bg-white dark:bg-zinc-700 text-center">
        <h3 className="capitalize text-green-500 text-2xl md:text-4xl font-extrabold">contact us</h3>
        <h3 className="capitalize text-zinc-400 dark:text-zinc-100 text-base md:text-xl font-bold">if you faced any problem or have a question contact us we will Answer ASAP.</h3>
        <Form/>
      </div>
    )
  }

const Form = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      phone:"",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (!form.name || !form.email || !form.phone || !form.message) {
        alert("Please fill in all fields");
        return;
      }
    
      setLoading(true);
    
      emailjs
        .send(
          //Service id,
          //Template id,
          {
            from_name: form.name,
            to_name: "Castelo Platform",
            from_email: form.email,
            to_email: "castelo@gmail.com",
            from_phone: form.phone,
            message: form.message,
          },
          //public id
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. We Will Answer you As Soon As Possible.");
    
            setForm({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
    
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };
  
    return(
    <motion.div className="w-full md:w-1/3 text-left mt-4"
        initial={{
          opacity: 0,
          y:50,
        }}
        whileInView={{
          opacity: 1,
          y:0,
          transition:{
            duration: 1,
            delay: 0.6,
          }
        }}
      >
     <form ref={formRef} onSubmit ={handleSubmit}>
          <div className="mb-4">
            <label className="block text-zinc-500 dark:text-zinc-200 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="bg-white dark:bg-zinc-700 w-full shadow appearance-none border border-zinc-100 dark:border-zinc-600 rounded py-2 px-3 text-zinc-500 dark:text-zinc-200 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-zinc-500 dark:text-zinc-200 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="bg-white dark:bg-zinc-700 w-full shadow appearance-none border border-zinc-100 dark:border-zinc-600 rounded py-2 px-3 text-zinc-500 dark:text-zinc-200 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-zinc-500 dark:text-zinc-200 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="bg-white dark:bg-zinc-700 w-full shadow appearance-none border border-zinc-100 dark:border-zinc-600 rounded py-2 px-3 text-zinc-500 dark:text-zinc-200 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-zinc-500 dark:text-zinc-200 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-white dark:bg-zinc-700 w-full shadow appearance-none border border-zinc-100 dark:border-zinc-600 rounded py-2 px-3 text-zinc-500 dark:text-zinc-200 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Your message here"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <PrimaryButton label={loading ? "Sending..." : "Send"} type="submit"/>
            
          </div>
        </form>
    </motion.div>)
}
