import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const OnePlayer = () => {
  const [ovrScore, setOvrScore] = useState(501);
  const [currLegs, setCurrLegs] = useState(0);
  const [prevScores, setPrevScores] = useState([]);
  const [average, setAverage] = useState(0);
  const [score, setScore] = useState(0);

  const [placeholder, setPlaceholder] = useState('');

  let avgScore = 501 - ovrScore;

  const enterScore = () => {
    if (score < 181) {
      setOvrScore(ovrScore - score);
      setPrevScores([...prevScores, score]);

      console.log(avgScore);
    } else {
      return alert('Invalid entry, score must be between 0 and 180');
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View
        style={{
          backgroundColor: 'green',
          flexGrow: 1,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 100 }}>{ovrScore}</Text>
      </View>

      <View
        style={{
          backgroundColor: 'red',
          flexGrow: 1,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextInput
          style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
          keyboardType="number-pad"
          maxLength={3}
          onChangeText={(text) => {
            setScore(text);
          }}
        />
        <Button title="SCORE" onPress={enterScore}></Button>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          flexGrow: 1,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Average: {average}</Text>
      </View>
    </View>
  );
};

export default OnePlayer;
