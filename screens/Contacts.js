import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme, Input } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants";
import { Button} from "../components/";

const { width } = Dimensions.get("screen");

class Contacts extends React.Component {

  renderContacto() {
    return (
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input 
          placeholder="Nombre" 
          style={{ borderColor: theme.COLORS.argonTheme }}
          placeholderTextColor={theme.COLORS.argonTheme}
          />

        <Input placeholder="email@gmail.com"
          color={theme.COLORS.SUCCESS}
          style={{ borderColor: theme.COLORS.argonTheme }}
          placeholderTextColor={theme.COLORS.argonTheme} />
          
          <Input placeholder="mensaje"
          color={theme.COLORS.SUCCESS}
          style={{ borderColor: theme.COLORS.argonTheme }}
          placeholderTextColor={theme.COLORS.argonTheme} />
          
          <Input placeholder="password" password viewPass 
          style ={{size:"15"}} />
          
      </Block>
    );
  }
  renderButtons() {
    return (
      <Button color="info">Enviar</Button>
      
    );
  }

  renderTexto() {
    return (
      <Block flex style={styles.group}>
        <Text bold size={25} style={styles.argonTheme}>
           TELEFONO : 
           DIRECCION :
      
        </Text>
      </Block>
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
          {this.renderContacto()}
          {this.renderButtons()}
          {this.renderTexto()}
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
    marginTop: 3,
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