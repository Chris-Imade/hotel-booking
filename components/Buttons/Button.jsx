import { Text, View, Pressable } from 'react-native';
import { Component } from 'react';
import { styles } from "./styles";

class CustomButton extends Component {
    constructor(props) {
        super(props);
        // this.props = props;
    }
  render() {
    return (
      <View>
        <Pressable 
          style={[
            styles.button, 
            this.props.border.addBorder ? { 
              borderWidth:  1, 
              borderColor: this.props.border.color,

          } : null, ...this.props.btnStyle]}>
            <Text style={[styles.btnTxt, ...this.props.txtStyle]}>{this.props.title}</Text>
        </Pressable>
      </View>
    )
  }
}

export default CustomButton;