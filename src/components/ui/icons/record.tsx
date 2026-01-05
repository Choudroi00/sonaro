import * as React from 'react';
import Svg, { Circle, type SvgProps } from 'react-native-svg';

export const Record = ({ color = '#000', ...props }: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={10} stroke={color} strokeWidth={2} />
    <Circle cx={12} cy={12} r={5} fill={color} />
  </Svg>
);
