import React from 'react';
import { View } from 'react-native';
import {
  Text,
  Thumbnail,
  List,
  ListItem,
  H2,
  Left,
  Button,
  Icon,
  Body,
  Right,
} from 'native-base';
import Page from '../../components/Page';
import styles from './styles';

type PropsType = {
  navigation: any,
  userProfile: any,
};

export default class Home extends React.Component<PropsType> {
  render() {
    const { userProfile, navigation } = this.props;
    const footerProps = {
      navigation,
    };
    return (
      <Page footerProps={footerProps} headerProps>
        {userProfile
          && (
            <View style={styles.centredItems}>
              <Thumbnail large source={{ uri: userProfile.pictureUri }} />
              <H2>{userProfile.fullName}</H2>
              <Text>{userProfile.username}</Text>
              <Text>{userProfile.officialCode}</Text>
            </View>
          )
        }
        <View style={styles.shortcutContainer}>
          <List>
            <ListItem icon onPress={() => this.props.navigation.navigate('Courses')}>
              <Left>
                <Button>
                  <Icon active name="book" />
                </Button>
              </Left>
              <Body>
                <Text>Mes cours</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem icon>
              <Left>
                <Button>
                  <Icon active name="school" />
                </Button>
              </Left>
              <Body>
                <Text>Catalogue des cours</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem icon>
              <Left>
                <Button>
                  <Icon active name="ios-mail" />
                </Button>
              </Left>
              <Body>
                <Text>Mes messages</Text>
              </Body>
              <Right />
            </ListItem>
          </List>
        </View>
      </Page>
    );
  }
}
