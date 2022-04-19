import { FC } from 'react';
import { ReactComponent as ThankYou } from '../../assets/illustration-thank-you.svg';

interface AfterSubmitProps {
  len: number;
  rank: string;
}

const AfterSubmit: FC<AfterSubmitProps> = ({ rank, len }) => {
  return (
    <>
      <div className="thankwrapper">
        <ThankYou />
      </div>
      <div className="selected-rank">
        You selected {rank} out of {len}
      </div>
      <h2>Thank you!</h2>
      <p className="thankpar">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </>
  );
};

export default AfterSubmit;
