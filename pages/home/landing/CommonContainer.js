import { useState } from "react";
import cn from "classnames";

const CommonContainer = ({ position, render }) => {
  console.log(render);

  const imageData = [
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1601979689063-cb474664e70b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
      title: "Ohahah",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Ohahah",
    },
    {
      mediaUrl:
        "https://images.unsplash.com/photo-1614481327033-68e5df399653?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=951&q=80",
      title: "Ohahah",
    },
  ];
  const first = imageData[0];
  const [activeMedia, setActiveMedia] = useState(first);

  return (
    <>
      <div>
        <ul className={`navigation ${position}`}>
          {imageData.map((media, index) => (
            <li
              key={index}
              className={cn({
                active: media.mediaUrl === activeMedia.mediaUrl,
              })}
              onMouseEnter={() => setActiveMedia(media)}
              onMouseLeave={() => {}}
            >
              {media.title}
            </li>
          ))}
        </ul>
      </div>
      {render(activeMedia)}
    </>
  );
};

export default CommonContainer;
