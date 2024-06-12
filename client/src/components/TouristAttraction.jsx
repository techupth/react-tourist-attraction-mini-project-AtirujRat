import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";

function TouristAttraction(props) {
  const [clipboard, setClipboard] = useState(false);

  const clipboardHandle = () => {
    setClipboard(true);
    navigator.clipboard.writeText(props.url);
    const timer = setTimeout(() => {
      setClipboard(false);
    }, 5000);
  };

  return (
    <div className="flex items-center justify-between w-[1250px] h-fit">
      <img
        className="w-[400px] h-[275px] object-cover rounded-3xl"
        src={props.photos[0]}
        alt=""
      />
      <div className="flex items-start flex-col gap-2 w-[800px]">
        <a className="text-2xl font-[500]" target="_blank" href={props.url}>
          {props.title}
        </a>

        <p
          className={`text-[#7c7c7c] w-full ${
            props.index === props.readmore ? "" : "truncate"
          }`}
        >
          {props.description}
        </p>
        <button
          className="text-[#2a99da] underline underline-offset-1"
          onClick={() => props.toggleReadmoreHandle(props.index)}
        >
          อ่านต่อ
        </button>
        <div className="flex items-center gap-4 text-[#2a99da]">
          <button onClick={clipboardHandle} className=" text-2xl ">
            {clipboard ? <FaClipboardCheck /> : <FaClipboard />}
          </button>
          {clipboard && <h1>Copied Link</h1>}
        </div>

        <ul className="flex items-center gap-2 text-[#7c7c7c]">
          หมวด
          {props.tags.map((tag, index) => {
            return (
              <li key={index}>
                {index === props.tags.length - 1 && (
                  <span className="no-underline">และ</span>
                )}{" "}
                <button
                  onClick={() =>
                    props.setSearchBarInput((prev) => `${tag} ${prev} `)
                  }
                  className="underline underline-offset-1"
                >
                  {tag}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-5">
          <img
            className="w-[100px] h-[100px] rounded-3xl object-cover"
            src={props.photos[1]}
          />
          <img
            className="w-[100px] h-[100px] rounded-3xl object-cover"
            src={props.photos[2]}
          />
          <img
            className="w-[100px] h-[100px] rounded-3xl object-cover"
            src={props.photos[3]}
          />
        </div>
      </div>
    </div>
  );
}

export default TouristAttraction;
