import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../Context/ThemeContext";
import { myColors } from "../styles/Colors";

function Button({ title, onPress, isBlue, isGray, isRed }) {
  const theme = useContext(ThemeContext);
  return (
    <Pressable
      style={
        isBlue
          ? Styles.btnBlue
          : isRed
          ? Styles.btnRed
          : isGray
          ? Styles.btnGray
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray || isRed
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </Pressable>
  );
}

export default Button;

const Styles = StyleSheet.create({
  btnBlue: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: myColors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    marginHorizontal: 10,
  },
  btnDark: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: myColors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    marginHorizontal: 10,
  },
  btnLight: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: myColors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    marginHorizontal: 10,
  },
  btnGray: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: myColors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    marginHorizontal: 10,
  },
  btnRed: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: "#eb1414",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    marginHorizontal: 10,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black,
  },
});
