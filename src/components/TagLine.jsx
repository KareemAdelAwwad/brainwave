import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`${className || ""} tagline flex items-center justify-center`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
