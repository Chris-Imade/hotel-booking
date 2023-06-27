type ImageObject = { id: number, image: ImageSourcePropType };
export type DetailedImageProps = ImageObject[];

export type CarouselImageReceivedProps = {
    data: ImageObject[];
}

type UtilityObject = { id: number; name: string; type: string }
export type UtilitiesProp = UtilityObject[];