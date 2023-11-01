import { RiStarSFill } from "react-icons/ri";

const Rating = ({ stars }) => {
  return (
    <div>
      {Array?.from({ length: stars }, (_, index) => (
        <RiStarSFill size={20} color="gold" key={index} />
      ))}
    </div>
  );
};

export default Rating;
