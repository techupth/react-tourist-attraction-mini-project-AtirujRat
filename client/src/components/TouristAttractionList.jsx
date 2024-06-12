import { useState } from "react";
import TouristAttraction from "./TouristAttraction";

const TouristAttractionList = (props) => {
  const [readmore, setReadMore] = useState("");

  const toggleReadmoreHandle = (index) => {
    setReadMore((prev) => (prev === index ? "" : index));
  };

  return (
    <div className="flex items-center justify-center gap-14 flex-col">
      {props.tourlistPlaces.map((item, index) => {
        return (
          <TouristAttraction
            key={index}
            index={index}
            toggleReadmoreHandle={toggleReadmoreHandle}
            readmore={readmore}
            title={item.title}
            description={item.description}
            tags={item.tags}
            photos={item.photos}
            url={item.url}
            setSearchBarInput={props.setSearchBarInput}
          />
        );
      })}
    </div>
  );
};

export default TouristAttractionList;
