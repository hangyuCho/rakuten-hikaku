"use client";
import Image from "next/image";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
interface HotelRatingInfo {
  serviceAverage: number;
  locationAverage: number;
  roomAverage: number;
  equipmentAverage: number;
  bathAverage: number;
  mealAverage: number;
}
interface HotelBasicInfo {
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

const init = async (
  setHotelBasicInfo: Dispatch<SetStateAction<HotelBasicInfo | undefined>>,
  setHotelRatingInfo: Dispatch<SetStateAction<HotelRatingInfo | undefined>>
) => {
  const res: Response = await fetch("http://localhost:3000/api/rakuten/travel");
  const data = await res.json();
  const hotels = data.hotels[0];
  setHotelBasicInfo(hotels.hotel[0].hotelBasicInfo);
  setHotelRatingInfo(hotels.hotel[1].hotelRatingInfo);
};
interface HotelRatingInfo {}
export default function Home() {
  const [hotelBasicInfo, setHotelBasicInfo] = useState<HotelBasicInfo>();
  const [hotelRatingInfo, setHotelRatingInfo] = useState<HotelRatingInfo>();
  useEffect(() => {
    init(setHotelBasicInfo, setHotelRatingInfo);
  }, []);
  return (
    <div>
      {!!hotelBasicInfo && (
        <div className="flex flex-col text-gray-600">
          <div className="flex">
            <Image
              src={hotelBasicInfo.hotelImageUrl}
              className="object-contain"
              width={250}
              height={25}
              alt="hotelImageUrl"
            />
            <Image
              src={hotelBasicInfo.roomImageUrl}
              className="object-contain"
              width={250}
              height={25}
              alt="hotelImageUrl"
            />
          </div>
          <div>{hotelBasicInfo.hotelName}</div>
          <div>{hotelBasicInfo.hotelKanaName}</div>
          <div>{hotelBasicInfo.hotelSpecial}</div>
          <div>{hotelBasicInfo.hotelMinCharge}</div>
          <div>
            {hotelBasicInfo.latitude}/{hotelBasicInfo.longitude}
          </div>
          <div>{hotelBasicInfo.postalCode}</div>
          <div>{hotelBasicInfo.address1}</div>
          <div>{hotelBasicInfo.address2}</div>
          <div>{hotelBasicInfo.telephoneNo}</div>
          <div>{hotelBasicInfo.access}</div>
          <div>{hotelBasicInfo.parkingInformation}</div>
          <div>{hotelBasicInfo.nearestStation}</div>
          <div>{hotelBasicInfo.reviewCount}</div>
          <div>{hotelBasicInfo.reviewAverage}</div>
          <div>{hotelBasicInfo.userReview}</div>
        </div>
      )}
      <hr />
    </div>
  );
}
