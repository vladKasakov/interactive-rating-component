import { FC, useRef, useContext, useEffect } from 'react';
import { ActiveContext, IActiveContext } from '../context';

interface ScaleStepProps {
  inner: number;
  handleClickRank: (num: number) => void;
}

const ScaleStep: FC<ScaleStepProps> = ({ inner, handleClickRank }) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.textContent) {
      let rank = +e.currentTarget.textContent;
      handleClickRank(rank);
    }
  };

  return (
    <>
      <div id={String(inner)} className="circle" onClick={handleClick}>
        <span>{inner}</span>
      </div>
    </>
  );
};

interface ScaleProps {
  scale: number[];
  handleClickRank: (num: number) => void;
}

const Scale: FC<ScaleProps> = ({ scale, handleClickRank }) => {
  let { rank } = useContext(ActiveContext) as IActiveContext;
  let divRef = useRef<HTMLDivElement | null>(null);

  const handleActive = () => {
    if (divRef.current) {
      for (let i = 0; i < divRef.current.childNodes.length; i++) {
        const div = divRef.current.childNodes[i] as HTMLDivElement;
        div.classList.remove('active');

        if (div.id === rank) div.classList.add('active');
      }
    }
  };

  useEffect(() => {
    handleActive();
  }, [rank]);

  return (
    <>
      <div className="markswrapper" ref={divRef}>
        {scale.map((el) => {
          return (
            <ScaleStep key={el} inner={el} handleClickRank={handleClickRank} />
          );
        })}
      </div>
    </>
  );
};

export default Scale;
