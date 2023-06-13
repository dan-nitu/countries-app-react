import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from './../assets/icons/arrow-left-icon.svg';

const BackButton = () => {
  return (
    <Link to='/' className='back-button'>
      <ArrowLeftIcon />
      Back
    </Link>
  );
};
export default BackButton;
