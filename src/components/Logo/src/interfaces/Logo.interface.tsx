import sxInterface from "@/interfaces/sx.interface";
import ImageProps from "@/interfaces/image.interface";
import {SxProps, Theme} from "@mui/system";

export interface LogoProps extends sxInterface {
  className?: string;
  image ?: ImageProps;
  text ?: {
    text ?: string;
    id ?: string;
  };
  sx : object;
  textSx ?: object;
  imageSx ?: SxProps<Theme>;
}