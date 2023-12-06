import Skeleton from "@mui/material/Skeleton";

const SkeletonComp = () => {
  return (
    <>
      <Skeleton variant="rectangular" animation="wave" width="100%" height={50} />
    </>
  );
};

export default SkeletonComp;
