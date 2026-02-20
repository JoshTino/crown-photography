import {Phone} from "lucide-react";
import {motion} from "framer-motion";


const Dial = () => {

	return(
		<>
			<motion.div
			initial={{ scale: 1 }}
      
      whileInView={{
        scale: [1, 1.08, 1],
      }}
      
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      
      viewport={{ once: false }}
			 className="bg-green-700 size-20 md:hidden rounded-full fixed bottom-5 left-1/3 translate-x-1/3 flex items-center justify-center">
				<a href="tel:+2348158255799"><Phone/></a>
			</motion.div>
		</>
	);

}
export default Dial;