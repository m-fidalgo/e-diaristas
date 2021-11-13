import React from 'react';
import { Avatar } from 'react-native-paper';
import {
  UserInformationContainer,
  InformationContainer,
  UserName,
  UserDescription,
  UserRating,
} from './UserInformation.style';

export interface UserInformationProp {
  img?: string;
  name: string;
  rating: number;
  description?: string;
  darker?: boolean;
}

const UserInformation: React.FC<UserInformationProp> = (props) => {
  return (
    <UserInformationContainer darker={Boolean(props.darker)}>
      {props.img ? (
        <Avatar.Image source={{ uri: props.img }} />
      ) : (
        <Avatar.Text label={props.name[0]} />
      )}
      <InformationContainer>
        <UserName>{props.name}</UserName>
        <UserRating defaultRating={props.rating} />
        <UserDescription>{props.description}</UserDescription>
      </InformationContainer>
    </UserInformationContainer>
  );
};

export default UserInformation;
