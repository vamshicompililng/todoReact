import React from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true ,tagTitle:"Download now",tagColor:"blue"},
    },
    {
      desc:"A breakthrough to the Champions Trophy impasse is finally here and it will be played in a hybrid model.",
      filesize:".6mb",
      close:false,
      tag:{ isOpen: true ,tagTitle:"Download now",tagColor:"green"},
    },
    {
      desc:"The Melbourne Cricket Ground (MCG) is one of the most iconic and largest sports stadiums in the world, located in Melbourne, Australia. ",
      filesize:".12mb",
      close:false,
      tag:{ isOpen: true ,tagTitle:"Submit",tagColor:"blue"},
    }
  ];
  return (
    <>
      <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap ">

        {data.map((item,index)=>(
          <Card data={item}/>
        ))}
        </div>
    </>
  );
}

export default Foreground;
