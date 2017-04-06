import {
  grey300,
  grey600,
  classicBlue,
  classicBlueA100,
  classicBlueA200,
  fullBlack,
  fullWhite,
} from '../colors';
import {fade} from '../../utils/colorManipulator';
import spacing from '../spacing';

export default {
  spacing: spacing,
  fontFamily: 'Rubik, sans-serif',
  borderRadius: 1,
  palette: {
    primary1Color: grey300,
    primary2Color: grey300,
    primary3Color: grey600,
    accent1Color: classicBlue,
    accent2Color: classicBlueA100,
    accent3Color: classicBlueA200,
    textColor: fullBlack,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
};
