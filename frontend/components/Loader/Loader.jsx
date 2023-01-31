import loaderStyle from './Loader.module.css';

const Loader = () => {
  return (
    <div className={loaderStyle.spinnerContainer}>
      <div className={loaderStyle.spinner}></div>
    </div>
  );
};

export default Loader;
