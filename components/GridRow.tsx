"use client";
import Image from "next/image";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { HotelBasicInfo, HotelRatingInfo } from "@/types";
const init = async (
  setHotelBasicInfo: Dispatch<SetStateAction<HotelBasicInfo | undefined>>,
  setHotelRatingInfo: Dispatch<SetStateAction<HotelRatingInfo | undefined>>,
  hotelNo: number
) => {
  const res: Response = await fetch(`/api/rakuten/travel?hotelNo=${hotelNo}`);
  const data = await res.json();
  const hotels = data.hotels[0];
  setHotelBasicInfo(hotels.hotel[0].hotelBasicInfo);
  setHotelRatingInfo(hotels.hotel[1].hotelRatingInfo);
};

const GridRow = (props: any) => {
  const [hotelBasicInfo, setHotelBasicInfo] = useState<HotelBasicInfo>();
  const [hotelRatingInfo, setHotelRatingInfo] = useState<HotelRatingInfo>();
  useEffect(() => {
    init(setHotelBasicInfo, setHotelRatingInfo, props.hotelNo);
  }, []);
  return !!hotelBasicInfo ? (
    <div
      className={`${props.className} grid items-start justify-items-center mt-10 gap-2 p-4 break-all`}
    >
      <div role="row" className="flex flex-col items-center">
        <div className="flex h-32">
          <Image
            src={hotelBasicInfo.hotelImageUrl}
            className="object-contain"
            width={250}
            height={250}
            alt="hotelImageUrl"
          />
        </div>
        <div className="flex h-96">
          <Image
            src={hotelBasicInfo.roomImageUrl}
            className="object-contain"
            width={250}
            height={100}
            alt="hotelImageUrl"
          />
        </div>
      </div>
      <div role="row" className="text-center">
        <div className="text-xs">{hotelBasicInfo.hotelKanaName}</div>
        <div>{hotelBasicInfo.hotelName}</div>
      </div>
      <div role="row">{hotelBasicInfo.hotelSpecial}</div>
      <div role="row">
        {hotelBasicInfo.hotelMinCharge
          ? `最低 "${hotelBasicInfo.hotelMinCharge.toLocaleString()}円"`
          : ""}
      </div>
      <div role="row">
        {hotelBasicInfo.latitude}/{hotelBasicInfo.longitude}
      </div>
      <div role="row">{hotelBasicInfo.postalCode}</div>
      <div role="row">{hotelBasicInfo.address1}</div>
      <div role="row">{hotelBasicInfo.address2}</div>
      <div role="row">{hotelBasicInfo.telephoneNo}</div>
      <div role="row">{hotelBasicInfo.access}</div>
      <div role="row">{hotelBasicInfo.parkingInformation}</div>
      <div role="row">{hotelBasicInfo.nearestStation}</div>
      <div role="row">{hotelBasicInfo.reviewCount}</div>
      <div role="row">{hotelBasicInfo.reviewAverage}</div>
      <div role="row">{hotelBasicInfo.userReview}</div>
    </div>
  ) : null;
};

export default GridRow;
