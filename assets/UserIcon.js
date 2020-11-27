import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function UserIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10.373}
      height={11.712}
      viewBox="0 0 10.373 11.712"
      {...props}>
      <Path
        d="M5.186 5.856a2.678 2.678 0 10-2.678-2.678 2.678 2.678 0 002.678 2.678zm1.875.669h-.35a3.642 3.642 0 01-3.05 0h-.349A2.813 2.813 0 00.5 9.337v.87a1 1 0 001 1h7.368a1 1 0 001-1v-.87a2.813 2.813 0 00-2.807-2.812z"
        fill="none"
        stroke="#ccc"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default UserIcon;
