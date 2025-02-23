import { ImageStyle } from 'react-native';
import { IProps } from "../Dropdown/model";

interface Props extends IProps {
  testID?: string;
  itemTestIDField?: string;
  imageField: string;
  imageStyle?: ImageStyle;
}

export type SelectCountryProps = Props;
