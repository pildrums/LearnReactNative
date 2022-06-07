import React from 'react';
import {Text, SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components/native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <StyledView>
          <StyleText>안녕하세요 필드럼입니다.</StyleText>
          <StyleText>안녕하세요 필드럼입니다.</StyleText>
          <StyleText>안녕하세요 필드럼입니다.</StyleText>
        </StyledView>
      </SafeAreaView>
    </>
  );
};

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleText = styled.Text`
  color: #000;
  font-size: 24px;
`;

export default App;
