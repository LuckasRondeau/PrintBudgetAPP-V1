import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

class Contacts extends React.Component {
  
  render1() {
    return (
      <Text bold size={16} style={styles.title1}>
          Social
        </Text>
        
      );
  }

  renderSocial = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Social
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block row center space="between">
            <Block flex middle right>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="facebook"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.FACEBOOK}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle center>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="twitter"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.TWITTER}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle left>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="instagram"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.INSTAGRAM}
                style={[styles.social, styles.shadow]}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {this.render1()}
          {this.renderSocial()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title1: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 7,
    marginTop: 5,
    color: argonTheme.COLORS.HEADER
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 7,
    marginTop: 300,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 10
  },
 
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  },
});
export default Contacts;