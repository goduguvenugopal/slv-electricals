import React from 'react';
import { ourServices } from './data';
import { motion } from 'framer-motion';


const Services = () => {
    return (
        <>

            <main className="p-3 mt-20 border-t-1 pt-18 text-center">
                <h5 className="text-3xl mb-3 text-white font-medium">{ourServices.title}</h5>
                <p className="text-[#9ea2a3] text-[1.1rem]">
                    {ourServices.subTitle}
                </p>

                {/* skills cards */}
                <section className="flex justify-center gap-10 flex-wrap mt-10">

                    <motion.div
                       
                        className=" text-center  p-6 pb-8 rounded-2xl "
                        initial={{ y: 50, scale: 0.8, opacity: 0 }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: false }}
                    >
                        <div className="flex justify-center items-center gap-7 lg:gap-10 flex-wrap">
                            {ourServices.services.map((service, index1) => (
                                <div
                                    className="border shadow-sm hover:shadow-white  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer flex justify-center px-5 py-2 items-center gap-2 border-gray-400 rounded-3xl hover:border-gray-200 hover:text-[#dcdddd] text-[#9ea2a3] bg-gray-900"
                                    key={index1}
                                >
                                    <h5 className=" font-medium text-[1rem]">{service}</h5>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </section>
            </main>

        </>
    );
};

export default Services;
