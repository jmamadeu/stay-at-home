import styled from 'styled-components/native';

import { ScrollView } from 'react-native-gesture-handler';

import Constants from 'expo-constants';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  flex: 1;

  background: #fffbf0;
`;

export const Content = styled.View`
  padding: 0 ${wp(4)}px;
`;

export const PageTitle = styled.Text`
  margin-top: ${Constants.statusBarHeight + hp(6)}px;
  color: #f7931e;
  font-family: Sniglet_400Regular;
  letter-spacing: 1px;
  font-size: ${hp(4)}px;
`;

export const InputSearch = styled.TextInput`
  background: #fef5dc;
  margin-top: ${hp(3)}px;
  border-radius: 5px;
  padding: 10px;
  color: #9a5504;
  font-size: ${hp(2.3)}px;
`;

export const RecentActivityContainer = styled(ScrollView)`
  max-height: ${hp(20)}px;
  margin-top: ${hp(0.8)}px;
`;

export const RecentActivityItem = styled.Image`
  width: ${wp(40)}px;
  height: ${hp(22)}px;
  margin-right: ${wp(4)}px;
`;

export const SubTitle = styled.Text`
  color: #f7931e;
  font-family: Sniglet_400Regular;
  font-size: ${hp(3)}px;
  margin-top: ${hp(2)}px;
`;

export const OtherActivitiesContainer = styled.ScrollView`
  margin-top: ${hp(2)}px;
`;
