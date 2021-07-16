const btn = () => {
  return (
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
  );
};

export default btn;
