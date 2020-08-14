import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  Description,
  Title,
  ButtonStarter,
  ButtonText,
} from './styles';

import homeImg from '../../assets/images/home_image.png';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Stay at home</Title>
      <Image source={homeImg} resizeMode='contain' />
      <Description>
        A quarantine is a restriction on the movement of people and goods which
        is intended to prevent the spread of disease or pests.
      </Description>
      <ButtonStarter onPress={() => navigate('Activity')}>
        <ButtonText>Get Started</ButtonText>
      </ButtonStarter>
    </Container>
  );
};

export default Home;
