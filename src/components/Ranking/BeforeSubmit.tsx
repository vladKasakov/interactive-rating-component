import { FC, useContext } from 'react';
import { ActiveContext, IActiveContext } from '../context';
import { ReactComponent as Star } from '../../assets/icon-star.svg';
import Scale from './Scale';

interface BeforeSubmitProps {
  handleSubmit: () => void;
  handleClickRank: (num: number) => void;
  count: number[];
}

const BeforeSubmit: FC<BeforeSubmitProps> = (props) => {
  let { handleSubmit, handleClickRank, count } = props;

  let {rank} = useContext(ActiveContext) as IActiveContext;

  return (
    <>
      <div className="starwrapper">
        <Star />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Scale scale={count} handleClickRank={handleClickRank} />
      <button
        className="submitBtn"
        onClick={handleSubmit}
        disabled={rank === '' ? true : false}
      >
        SUBMIT
      </button>
    </>
  );
};

export default BeforeSubmit;
