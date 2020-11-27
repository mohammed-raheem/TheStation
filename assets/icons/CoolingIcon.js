import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

function CoolingIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 16.079}
      height={props.height || 16.837}
      viewBox="0 0 16.079 16.837"
      {...props}>
      <G
        fill="none"
        stroke={props.color || '#ccc'}
        strokeLinecap="round"
        strokeMiterlimit={10}>
        <Path d="M12.189 9.403h1.54a.633.633 0 00.545-.312l1.216-2.056a.64.64 0 00.089-.326v-5a1.205 1.205 0 00-1.2-1.208H1.702a1.205 1.205 0 00-1.2 1.208v5a.64.64 0 00.089.326l1.217 2.056a.633.633 0 00.545.312h1.54M.5 6.884h15.079M1.269 8.184h13.542M12.42 2.117v3.161M13.798 2.936l-2.755 1.522M11.043 2.936l2.755 1.522" />
        <G transform="translate(4.512 9.186)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(7.243 9.186)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(9.971 9.186)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(4.271 11.184)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(7.243 11.184)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(10.212 11.184)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(3.611 13.182)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(7.243 13.182)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(10.872 13.182)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(2.343 15.18)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(7.243 15.18)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
        <G transform="translate(12.141 15.18)">
          <Circle cx={0.828} cy={0.828} r={0.828} stroke="none" />
          <Circle cx={0.828} cy={0.828} r={0.328} />
        </G>
      </G>
    </Svg>
  );
}

export default CoolingIcon;
