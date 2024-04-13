import heart from "./assets/heart.png";
import brokenheart from "./assets/brokenHeart.png";

const Lives: React.FC<{ lives: number }> = ({ lives }) => {
  let divContent;
  console.log(lives);
  if (lives === 3) {
    divContent = (
      <>
        <img src={heart} alt="heart" className="w-[32px] h-[27.75px]" />
        <img src={heart} alt="heart" className="w-[32px] h-[27.75px]" />
        <img src={heart} alt="heart" className="w-[32px] h-[27.75px]" />
      </>
    );
  } else if (lives === 2) {
    divContent = (
      <>
        <img
          src={brokenheart}
          alt="broken heart"
          className="w-[32px] h-[27.75px]"
        />
        <img src={heart} alt="heart" className="w-[32px] h-[27.75px]" />
        <img src={heart} alt="heart" className="w-[32px] h-[27.75px]" />
      </>
    );
  } else if (lives === 1) {
    divContent = (
      <>
        <img
          src={brokenheart}
          alt="broken heart"
          className="w-[32px] h-[27.75px]"
        />
        <img
          src={brokenheart}
          alt="broken heart"
          className="w-[32px] h-[27.75px]"
        />
        <img src={heart} alt="heart" className="w-[32px] h-[27.75px]" />
      </>
    );
  } else {
    divContent = (
      <>
        <img
          src={brokenheart}
          alt="broken heart"
          className="w-[32px] h-[27.75px]"
        />
        <img
          src={brokenheart}
          alt="broken heart"
          className="w-[32px] h-[27.75px]"
        />
        <img src={brokenheart} alt="heart" className="w-[32px] h-[27.75px]" />
      </>
    );
  }

  return (
    <div className="flex flex-row justify-center items-center space-x-2">
      {divContent}
    </div>
  );
};

export default Lives;
