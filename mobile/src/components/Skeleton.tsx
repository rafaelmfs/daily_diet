import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface SkeletonBlockProps{
  width?: string
  height?: string
}

const SkeletonBlock = styled(Animated.View)<SkeletonBlockProps>`
  ${({ width, height}) => css`
    width: ${ width ?? '100%'};
    height: ${height ?? '20px'};
    background-color: #ddd;
    border-radius: 5px;
  `}
`;

export function Skeleton ({height, width}: SkeletonBlockProps){
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      })
    ).start();
  };

  return (
    <SkeletonBlock
      height={height}
      width={width}
      style={{
        opacity: shimmerAnimation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0.5, 1, 0.5],
        }),
      }}
    />
  );
};