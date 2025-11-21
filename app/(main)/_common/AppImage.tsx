import { ImageProps } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function AppImage({ ...props }: ImageProps) {
  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      className="w-[auto] h-[auto]"
      {...props}
      alt=""
    />
  );
}
