import React, { useLayoutEffect } from "react";
import { Header, Main, Services, Contact } from "../Components";

function Home() {

  const scrollX = window.scrollX
  const scrollY = window.scrollY

  useLayoutEffect(() => {
    window.scrollTo(scrollX,scrollY)
  })

  return (
    <div className="snap-y scroll-smooth overflow-x-hidden snap-mandatory h-screen">
      <Header />
      <section id="main" className="snap snap-center">
        <Main />
      </section>
      <section id="services" className="snap snap-center">
        <Services />
      </section>
      <section id="contact" className="snap snap-center">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
