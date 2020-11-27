import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function NewsIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.087}
      height={21.979}
      viewBox="0 0 23.087 21.979"
      {...props}>
      <Path
        d="M22.28 4.72a2.458 2.458 0 00-1.763-.688h-4.552V.889a.889.889 0 00-.891-.888H.888A.891.891 0 000 .889v18.536a2.706 2.706 0 002.383 2.554h16.624a4.11 4.11 0 004.08-3.835V6.608a2.619 2.619 0 00-.807-1.888zM1.04 19.131V1.04h13.879v16.887a4.128 4.128 0 001.385 3.011H2.847a1.807 1.807 0 01-1.807-1.807zm17.966 1.807h-.02a3.078 3.078 0 01-3.026-3.021V5.072h2.654a2.611 2.611 0 00-.48 1.264v10.938a.535.535 0 00.469.54.52.52 0 00.571-.518V6.439a1.514 1.514 0 011.364-1.371 1.411 1.411 0 011.029.4 1.55 1.55 0 01.485 1.135v11.469a3.065 3.065 0 01-3.045 2.866z"
        fill={props.color === '#3D3A37' ? props.color : '#ccc'}
      />
      <Path
        d="M12.867 4.032H2.905a.52.52 0 000 1.04h9.962a.52.52 0 000-1.04zM12.867 5.921H2.905a.52.52 0 100 1.04h9.962a.52.52 0 100-1.04zM6.935 9.771H2.903a.52.52 0 100 1.04h4.032a.52.52 0 100-1.04zM12.867 9.771H8.843a.52.52 0 100 1.04h4.032a.52.52 0 100-1.04zM6.935 11.599H2.903a.52.52 0 100 1.04h4.032a.52.52 0 100-1.04zM12.867 11.599H8.843a.52.52 0 100 1.04h4.032a.52.52 0 100-1.04zM6.935 13.428H2.903a.52.52 0 000 1.041h4.032a.52.52 0 000-1.041zM12.867 13.428H8.843a.52.52 0 000 1.041h4.032a.52.52 0 000-1.041zM6.935 15.256H2.903a.52.52 0 000 1.04h4.032a.52.52 0 000-1.04zM12.867 15.256H8.843a.52.52 0 100 1.04h4.032a.52.52 0 000-1.04zM6.935 17.085H2.903a.52.52 0 000 1.04h4.032a.52.52 0 000-1.04zM12.867 17.085H8.843a.52.52 0 100 1.04h4.032a.52.52 0 000-1.04z"
        fill={props.color === '#3D3A37' ? props.color : '#ccc'}
      />
    </Svg>
  );
}

export default NewsIcon;