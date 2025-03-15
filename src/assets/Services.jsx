import React from 'react';
import { ourServices } from './data';
import { motion } from 'framer-motion';


const Services = () => {
    return (
        <>

            <main className="p-3 select-none mt-20 border-t-1 pt-18 text-center">
                <h5 className="text-3xl mb-3 text-white font-medium">Our Services</h5>
                <p className="text-[#9ea2a3] text-[1.1rem]">
                    Here are our core services, where we excel in both supply and installation.
                </p>

                {/* services cards */}
                <section className="flex justify-center gap-10 flex-wrap mt-10">
                    {ourServices.map((title, index) => (
                        <motion.div
                            key={index}
                            className="border text-center w-[90%] lg:w-[45%] shadow-sm shadow-yellow-500 p-6 pb-8 rounded-2xl border-yellow-500"
                            initial={{ y: 50, scale: 0.8, opacity: 0 }}
                            whileInView={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: false }}
                        >
                            <h5 className="mb-8 font-medium text-2xl text-[#e0e3e3]">{title.title}</h5>
                            <div className="flex justify-center items-center gap-3 flex-wrap">
                                {title.services.map((item, index1) => (
                                    <div
                                        className="border flex justify-center px-5 py-2 items-center gap-2 border-gray-400 rounded-3xl"
                                        key={index1}
                                    >
                                        
                                        <h5 className="text-[#9ea2a3] font-medium text-[1rem]">{item}</h5>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </section>
            </main>

        </>
    );
};

export default Services;
