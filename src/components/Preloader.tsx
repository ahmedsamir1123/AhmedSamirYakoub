import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Images/MyLogoWhite.webp"

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-white flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-32 h-32"
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            width={128}
                            height={128}
                            className="animate-spin-slow"
                        />
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default Preloader;
