import { useState } from "react";
import Button from "./Button";
import { View, Text, StyleSheet } from "react-native";
import { myColors } from "../styles/Colors";

function MyKeyboards() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);
  const [isNeg, setIsNeg] = useState(false);
  const [isLog, setIsLog] = useState(false);
  const [isSin, setIsSin] = useState(false);
  const [isCos, setIsCos] = useState(false);

  function handleNumberPress(buttonValue) {
    if (buttonValue == "." && firstNumber == "") setFirstNumber("0.");
    else if (buttonValue == "π" && firstNumber == "")
      setFirstNumber("3.14159265");
    else if (buttonValue == "e" && firstNumber == "")
      setFirstNumber("2.7182818");
    else if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  }

  function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
      return answer;
    } else {
      for (var i = n; i >= 1; i--) {
        answer = answer * i;
      }
      return answer;
    }
  }

  function handleOperationPress(buttonValue) {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  }
  function HandleTap(operator) {
    if (operator == "posNeg") {
      if (firstNumber == "") setFirstNumber("-");
      else setFirstNumber(`${parseFloat(firstNumber) * -1}`);
    } else if (operator == "log") {
      setOperation("log");
      setIsLog(true);
    } else if (operator == "sin") {
      setOperation("sin");
      setIsSin(true);
    } else if (operator == "cos") {
      setOperation("cos");
      setIsCos(true);
    } else if (operator == "√") {
      setOperation(operator);
    } else if (operator == "n!") {
      setOperation(operator);
    }
  }

  function clear() {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  }

  function getResult() {
    switch (operation) {
      case "+":
        clear();
        setResult(parseFloat(secondNumber) + parseFloat(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseFloat(secondNumber) - parseFloat(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseFloat(secondNumber) * parseFloat(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseFloat(secondNumber) / parseFloat(firstNumber));
        break;
      case "％":
        clear();
        setResult((parseFloat(secondNumber) * 100) / parseFloat(firstNumber));
        break;
      case "log":
        clear();
        setResult(Math.log2(parseFloat(firstNumber)));
        break;
      case "sin":
        clear();
        setResult(Math.sin((Math.PI * parseFloat(firstNumber)) / 180));
        break;
      case "cos":
        clear();
        setResult(Math.cos((Math.PI * parseFloat(firstNumber)) / 180));
        break;
      case "√":
        clear();
        setResult(Math.sqrt(parseFloat(firstNumber)));
        break;
      case "n!":
        clear();
        setResult(factorial.bind("this", parseFloat(firstNumber)));
        break;
      case "^":
        clear();
        setResult(Math.pow(parseFloat(firstNumber), parseFloat(secondNumber)));
        break;
      default:
        clear();
        setResult(parseFloat(firstNumber));
        break;
    }
  }

  function firstNumberDisplay() {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  }

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="log" isGray onPress={() => HandleTap("log")} />
        <Button title="sin" isGray onPress={() => HandleTap("sin")} />
        <Button title="cos" isGray onPress={() => HandleTap("cos")} />
        <Button title="√" isGray onPress={() => HandleTap("√")} />
      </View>
      <View style={Styles.row}>
        <Button title="n!" isGray onPress={() => HandleTap("n!")} />
        <Button title="e" isGray onPress={() => HandleTap("e")} />
        <Button title="π" isGray onPress={() => HandleTap("π")} />
        <Button title="^" isBlue onPress={() => handleOperationPress("^")} />
      </View>
      <View style={Styles.row}>
        <Button title="AC" isRed onPress={clear} />
        <Button title="+/-" isGray onPress={() => HandleTap("posNeg")} />
        <Button title="％" isGray onPress={() => handleOperationPress("％")} />
        <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}

export default MyKeyboards;

const Styles = StyleSheet.create({
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
