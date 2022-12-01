import React from "react";
import { Header, Main, Services, Contact } from "../Components";

function Home() {

  return (
    <div  className="snap-y  scroll-smooth overflow-x-hidden snap-mandatory h-screen">
      <Header />
      <section id="main" className="snap snap-center">
        <Main />
      </section>
      <section  id="services" className="snap snap-center ">
        <Services />
      </section>
      <section id="contact" className="snap snap-center">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
