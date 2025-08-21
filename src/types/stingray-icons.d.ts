declare module "stingray-icons" {
  import { FC, SVGProps } from "react";

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
  }

  export const PlayPlayer: FC<IconProps>;
  export const Like: FC<IconProps>;
  export const Liked: FC<IconProps>;
  export const RemoveFromLiked: FC<IconProps>;
  export const Share: FC<IconProps>;
  export const Next: FC<IconProps>;
  export const Home: FC<IconProps>;

  // Add other icons as needed
  export const Add: FC<IconProps>;
  export const AddList: FC<IconProps>;
  export const AddSong: FC<IconProps>;
  export const AirPlay: FC<IconProps>;
  export const AirPlayAudio: FC<IconProps>;
  export const AllChatRead: FC<IconProps>;
  export const Amazon: FC<IconProps>;
  export const AndroidMic: FC<IconProps>;
  export const Apple: FC<IconProps>;
  export const AppsTools: FC<IconProps>;
  export const Archive: FC<IconProps>;
  export const Back: FC<IconProps>;
  export const Blender: FC<IconProps>;
  export const Block: FC<IconProps>;
  export const Bluetooth: FC<IconProps>;
  export const Bookmark: FC<IconProps>;
  export const Bookmarked: FC<IconProps>;
  export const Burger: FC<IconProps>;
  export const Business: FC<IconProps>;
  export const Calendar: FC<IconProps>;
}
