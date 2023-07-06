type ImageObject = { id: number, image: ImageSourcePropType };
export type DetailedImageProps = ImageObject[];

export type CarouselImageReceivedProps = {
    data: ImageObject[];
}

type UtilityObject = { id: number; name: string; type: string }
export type UtilitiesProp = UtilityObject[];

export type UserResponse = {
    idToken: string,
    serverAuthCode: string,
    scopes: Array<string>,
    user: {
      email: string,
      id: string,
      givenName: string,
      familyName: string,
      photo: string, // url
      name: string // full name
    }
}