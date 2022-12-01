import React from "react";
// bg-[#b1ffee]

function Main() {
  return (
    <div>
      <div className="h-screen  flex-col my-2 md:my-20 w-screen  mx-auto flex  items-center justify-center">
        <h1 className="font-medium text-2xl m-0 w-full text-center">
          Who we are ?
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between w-10/12">
          <img
            src="/images/doctor.png"
            alt="old woman"
            className="h-96 w-96 hidden md:block"
          />
          <h4 className=" py-8 px-10">
            <span className="text-cyan-500 text-2xl tracking-[1px] font-medium">
              Paeonia
            </span>{" "}
            Healthcare is a team of professional who deliver quality medical
            services.we're seeking to bridge the existing service gap for
            patients who require specialized and integrated at-home care. The
            company is a collaborative venture designed to offer a one-stop
            medical solution for all home healthcare services.Paeonia Healthcare
            Is also providing home isolation and quarantine services to the
            patients under the supervision of medical team and pulmonologist. We
            have already provided home quarantine services to 250+
            patients.Paeonia Healthcare has a strong team which includes
            Critical care doctors, ICU trained nurses and physiotherapists. We
            provides ICU setup at home, post-liver and kidney transplant care,
            advanced oncology including fourth-stage and palliative care as well
            as post-stroke patients and tracheotomy care. Further, it also
            offers medical equipment,lab services, ambulances and medical
            consumables.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Main;
