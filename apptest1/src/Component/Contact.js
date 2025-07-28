 

function Compcontact() {
  return (

    <div className="w-full flex flex flex-wrap px-16 gap-36 bg-rose-100 py-16 justify-center ">
      <div >
    <h1 className="text-6xl font-bold mb-6">Contact Us</h1>
    <p className="text-3xl mb-8 " >We're here to assist you! If you have <br />
      any questions or need assistance,<br /> please feel free to reach out to us.</p>
    <p className="text-3xl mb-8">You can also email us. Click here to <br />reveal email address</p>
        <a href="https://veilmail.io/e/FkKh7o" target="_blank "className="text-3xl text-blue-900 ">https://veilmail.io/e/FkKh7o</a>
    <p className="text-3xl">We use VeilMail.io to protect your<br /> email address from spam.</p>
    </div>

    <div  >
      <h1 className="text-6xl font-bold mb-6">Contact Form</h1>
      <form className="w-full">
      <label for="name" className="block font-semibold mb-2">Your Name:</label><br />
    <input type="text" id="name" name="name" className="border border-black rounded bg-white text-black w-full" required /><br /><br />

    <label for="email"  className="block font-semibold mb-2">Your Email:</label><br />
    <input type="email" id="email" name="email" className="border border-black rounded bg-white text-black w-full " required /><br /><br />

     <label for="message"  className="block font-semibold mb-2">Your Message:</label><br />
    <textarea id="message" name="message" rows="4" className="border border-black rounded bg-white text-black w-full " required></textarea><br /><br />

      </form>
      <button className="font-bold border border-black p-4 mt-16">Submit</button>

    </div>
    </div>

  );
}

export default Compcontact;
