import { FC, useContext, useState } from 'react';
import { ActiveContext, IActiveContext } from '../context';
import AfterSubmit from './AfterSubmit';
import BeforeSubmit from './BeforeSubmit';
import './Ranking.scss';

interface RankingProps {
  scale: number[];
}

const Ranking: FC<RankingProps> = ({ scale }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  let {rank, setRank} = useContext(ActiveContext) as IActiveContext;

  const handleClickRank = (num: number) => {
    setRank(String(num));
  };

  const handleSubmit = () => {
    if (rank) setIsSubmit(!isSubmit);
  };

  let style = isSubmit ? 'wrapper center' : 'wrapper';

  return (
    <div className={style}>
      {isSubmit ? (
        <AfterSubmit len={scale.length} rank={rank} />
      ) : (
        <BeforeSubmit
          handleSubmit={handleSubmit}
          handleClickRank={handleClickRank}
          count={scale}
        />
      )}
    </div>
  );
};

export default Ranking;
