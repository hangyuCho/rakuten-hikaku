export interface HotelInfo {
  hotelBasicInfo: HotelBasicInfo | null;
  hotelRatingInfo: HotelRatingInfo | null;
}

export class HotelInfoImpl implements HotelInfo {
  constructor(
    public readonly hotelBasicInfo: HotelBasicInfo,
    public readonly hotelRatingInfo: HotelRatingInfo
  ) {}
}

export interface HotelRatingInfo {
  serviceAverage: number;
  locationAverage: number;
  roomAverage: number;
  equipmentAverage: number;
  bathAverage: number;
  mealAverage: number;
}
export interface HotelBasicInfo {
  hotelNo: number;
  hotelName: string;
  hotelInformationUrl: string;
  planListUrl: string;
  dpPlanListUrl: string;
  reviewUrl: string;
  hotelKanaName: string;
  hotelSpecial: string;
  hotelMinCharge: number;
  latitude: number;
  longitude: number;
  postalCode: string;
  address1: string;
  address2: string;
  telephoneNo: string;
  faxNo: string;
  access: string;
  parkingInformation: string;
  nearestStation: string;
  hotelImageUrl: string;
  hotelThumbnailUrl: string;
  roomImageUrl: string;
  roomThumbnailUrl: string;
  hotelMapImageUrl: string;
  reviewCount: number;
  reviewAverage: number;
  userReview: string;
}
