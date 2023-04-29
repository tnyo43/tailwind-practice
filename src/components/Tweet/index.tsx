import Image from "next/image";
import { IconButton } from "../IconButton";

type Props = {
  imageSrc: string;
  name: string;
  userId: string;
  content: string;
};

export const Tweet: React.FC<Props> = (props) => (
  <div className="flex p-16 text-left">
    <div className="mr-8 flex-grow-0">
      <Image
        src={props.imageSrc}
        alt="icon"
        width="64"
        height="64"
        className="aspect-square rounded-max object-cover"
      />
    </div>
    <div className="flex-1">
      <div className="flex gap-4">
        <p className="text-lg font-bold">{props.name}</p>
        <p className="text-base font-thin text-gray-60">{props.userId}</p>
      </div>
      <div>
        <p className="whitespace-break-spaces">{props.content}</p>
      </div>
      <div className="px- mt-16 flex w-full justify-between">
        <div>
          <IconButton iconType="reply" onClick={() => console.log("reply")} />
        </div>
        <div>
          <IconButton
            iconType="screen_rotation_alt"
            onClick={() => console.log("retweet")}
          />
        </div>
        <div>
          <IconButton iconType="favorite" onClick={() => console.log("like")} />
        </div>
        <div>
          <IconButton iconType="share" onClick={() => console.log("share")} />
        </div>
      </div>
    </div>
  </div>
);
