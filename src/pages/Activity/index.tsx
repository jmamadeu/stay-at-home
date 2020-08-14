import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ActivityItem from '../../components/OtherActivityItem';

import {
  Container,
  Content,
  PageTitle,
  InputSearch,
  RecentActivityContainer,
  RecentActivityItem,
  SubTitle,
  OtherActivitiesContainer,
} from './styles';

import categoryImage1 from '../../assets/images/category1.png';
import categoryImage2 from '../../assets/images/category2.png';
import socialMediaImg from '../../assets/images/social_media.png';
import listenImg from '../../assets/images/listen.png';
import exerciseImg from '../../assets/images/exercise.png';
import { View } from 'react-native';

const Activity: React.FC = () => {
  return (
    <Container>
      <View>
        <Content>
          <PageTitle>Regular Activity</PageTitle>
          <InputSearch
            placeholder='Look for what to do'
            placeholderTextColor='#9A5504'
            keyboardType='web-search'
            autoCapitalize='none'
            returnKeyType='search'
          />
        </Content>
        <RecentActivityContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingStart: wp(4),
            paddingVertical: 0,
            marginVertical: 0,
          }}
        >
          <RecentActivityItem source={categoryImage1} resizeMode='contain' />
          <RecentActivityItem source={categoryImage2} resizeMode='contain' />
          <RecentActivityItem source={categoryImage1} resizeMode='contain' />
          <RecentActivityItem source={categoryImage2} resizeMode='contain' />
        </RecentActivityContainer>
        <Content>
          <SubTitle>Other activities</SubTitle>
        </Content>
      </View>

      <OtherActivitiesContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: wp(4),
          paddingTop: wp(1),
        }}
      >
        <ActivityItem
          title='Social Media'
          image={socialMediaImg}
          description='Social media refers to websites and applications that are
                designed to allow people to share content quickly, efficiently,
                and in real-time.'
        />

        <ActivityItem
          title='Listening Music'
          image={listenImg}
          description='Yes ! Music is a hobby that converts to a passion and emerges as the melody of life itself. It is emotive, approachable and can be personalized to suit your moods and persona. '
        />

        <ActivityItem
          title='Excercise'
          image={exerciseImg}
          description='Regular exercise is one of the best things you can do for your health.They keep your heart, lungs, and circulatory system healthy and improve your overall fitness.'
        />

        <ActivityItem
          title='Social Media'
          image={socialMediaImg}
          description='Social media refers to websites and applications that are
                designed to allow people to share content quickly, efficiently,
                and in real-time.'
        />

        <ActivityItem
          title='Listening Music'
          image={listenImg}
          description='Yes ! Music is a hobby that converts to a passion and emerges as the melody of life itself. It is emotive, approachable and can be personalized to suit your moods and persona. '
        />

        <ActivityItem
          title='Excercise'
          image={exerciseImg}
          description='Regular exercise is one of the best things you can do for your health.They keep your heart, lungs, and circulatory system healthy and improve your overall fitness.'
        />
      </OtherActivitiesContainer>
    </Container>
  );
};

export default Activity;
