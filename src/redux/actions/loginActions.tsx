// type LoginSwitchProps = {
//     loginScreen: boolean,
//     setLoginScreen: () => void
//   };

//     const handleSwitch = () => {
//       setLoginScreen(!loginScreen);
//     };

export const SWITCH_SCREEN = 'SWITCH_SCREEN';

export const switchScreens = () => ({
  type: SWITCH_SCREEN,
});
