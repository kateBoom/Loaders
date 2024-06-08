import classes from './Loaders.module.css';

export const DataLoader = ({
  size = '40px',
  color = '#fff',
  className = '',
  containerClassName = ''
}) => {
  return (
    <div className={`${classes.loaderContainer} ${containerClassName}`}>
      <div
        style={{ '--size': size, '--color': color }}
        className={`${classes.dataLoader} ${className}`}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const SimpleSceleton = ({ className = '' }) => {
  return <div className={`${className} ${classes.skeletonBox}`}></div>;
};

export const TableSceleton = ({ className = '' }) => (
  <div className={`${className} ${classes.tableSceletonContainer}`}>
    <div className={classes.tableSceletonBox}>
      <div className={`${classes.tableSceleton} ${classes.skeletonBox}`}></div>
      <div className={`${classes.tableSceleton} ${classes.skeletonBox}`}></div>
      <div className={`${classes.tableSceleton} ${classes.skeletonBox}`}></div>
      <div className={`${classes.tableSceleton} ${classes.skeletonBox}`}></div>
      <div className={`${classes.tableSceleton} ${classes.skeletonBox}`}></div>
      <div className={`${classes.tableSceleton} ${classes.skeletonBox}`}></div>
      <div className={`${classes.tableSceleton} ${classes.skeletonBox}`}></div>
      <div className={`${classes.tableSceleton} ${classes.skeletonBox}`}></div>
      <div className={`${classes.tableSceleton} ${classes.skeletonBox}`}></div>
    </div>
  </div>
);

export const ListSceleton = () => (
  <div className={classes.listSkeletonBox}>
    <div className={`${classes.listLoading} ${classes.skeletonBox}`}></div>
    <div className={`${classes.listLoading} ${classes.skeletonBox}`}></div>
    <div className={`${classes.listLoading} ${classes.skeletonBox}`}></div>
  </div>
);

export const MainLoader = ({ containerClassName = '' }) => {
  return (
    <div className={`${classes.mainLoaderBox} ${containerClassName}`}>
      <div className={classes.mainLoaderContainer}>
        <div className={classes.mainLoader}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export const DataScaleLoader = ({ containerClassName = '' }) => {
  return (
    <div className={`${classes.scaleLoaderBox} ${containerClassName}`}>
      <div className={classes.scaleLoader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
