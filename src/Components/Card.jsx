import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";


function Card({data}) {
  return (
   
      <motion.div drag className=" relative  flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white  px-8 py-10  mt-10  overflow-hidden" >
        <FaRegFileAlt />
        <p className="text-sm mt-5  leading-tight font-semibold">{data.desc }</p>
        <div className="footer absolute bottom-0 w-full  left-0 ">
            <div className="flex items-center justify-between  px-8 py-4 mb-5">
                <h5 >{data.filesize}</h5>
                <span className="w-7 h-7  bg-zinc-200 rounded-full flex items-center justify-center">
                  {data.close?<IoClose  color="000"/>:<IoCloudDownloadOutline size=".8em" color="000"/>}
                </span>
            </div>

            { data.tag.isOpen?
            (<div className={`tag w-full  py-4  ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3> 
            </div>):null
            }
        </div>
      </motion.div>
  
  );
}

export default Card;
