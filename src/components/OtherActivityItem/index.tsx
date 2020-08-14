import React from 'react';
import { ImageProps, View } from 'react-native';

import {
  OtherActivityItem,
  OtherActivityImage,
  OtherActivityContent,
  OtherActivityTitle,
  OtherActivityDescription,
} from './styles';

interface ActivityItemProps {
  image: ImageProps;
  title: string;
  description: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <OtherActivityItem>
      <OtherActivityImage source={image} resizeMode='contain' />
      <OtherActivityContent>
        <OtherActivityTitle>{title}</OtherActivityTitle>
        <OtherActivityDescription>{description}</OtherActivityDescription>
      </OtherActivityContent>
    </OtherActivityItem>
  );
};

export default ActivityItem;
