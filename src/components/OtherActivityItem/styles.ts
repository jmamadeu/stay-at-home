import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const OtherActivityItem = styled.View`
  flex-direction: row;
  margin-bottom: ${normalize(10)}px;
`;

export const OtherActivityImage = styled.Image`
  width: ${wp('40%')}px;
  height: ${hp(14.4)}px;
`;

export const OtherActivityContent = styled.View`
  flex: 1;
  justify-content: space-around;
  padding-left: ${normalize(14)}px;
`;

export const OtherActivityTitle = styled.Text`
  font-size: ${normalize(16, 'height')}px;
  font-family: Sniglet_400Regular;
  color: #171717;
  letter-spacing: 0.7px;
`;

export const OtherActivityDescription = styled.Text`
  color: #303030;
  font-family: Sniglet_400Regular;
  letter-spacing: 0.7px;
  font-size: ${normalize(10, 'height')}px;
  line-height: ${normalize(14, 'height')}px;
`;
