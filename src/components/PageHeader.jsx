import React from "react";

const PageHeader = ({title}) => {
  return (

<div className="">
    <div className="text-center w-full mx-auto pt-12 pb-4 px-4 sm:px-6 lg:py-8 lg:px-8 z-20">
        <h2 className="text-4xl font-extrabold text-orange-400 sm:text-5xl">
            <span className="block">
                {title}
            </span>
            
        </h2>
        {/* <span class="block text-orange-300 text-xl pt-2">
                Contactarse con nosotros
            </span> */}
    </div>
</div>
  );
};

export default PageHeader;
