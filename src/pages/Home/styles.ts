import styled from 'styled-components/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;

  background: #fef6e3;
  justify-content: space-between;
  align-items: center;
  padding: ${wp(10)}px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-family: AmaticSC_700Bold;
  font-size: 50px;
  color: #f7931e;
  margin-top: ${hp(6)}px;
`;

export const Description = styled.Text`
  font-size: ${hp(2.5)}px;
  color: #f7931e;
  font-family: Sniglet_400Regular;
  margin-top: ${hp(2)}px;
  text-align: center;
`;

export const ButtonStarter = styled(RectButton)`
  height: ${hp(6.5)}px;
  background: #006837;
  width: 100%;
  margin-top: ${hp(3)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${hp(2.8)}px;
  color: #fff;
  letter-spacing: 1px;
  font-family: Sniglet_400Regular;
`;
