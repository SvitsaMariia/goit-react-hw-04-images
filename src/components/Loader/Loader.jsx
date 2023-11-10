// import { ThreeDots } from 'react-loader-spinner';

// export const Loader = () => {
//   return (
//     <ThreeDots
//       height="80"
//       width="80"
//       radius="9"
//       color="#3f51b5"
//       ariaLabel="three-dots-loading"
//       wrapperStyle={{ margin: '0 auto' }}
//       wrapperClassName={'Loader'}
//       visible={true}
//     />
//   );
// };


import { Grid } from 'react-loader-spinner';

export const Loader = ({ isVisible }) => {
  return (
    <Grid
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />

  );
};
