"use client";
import { GridColumn } from "@/components";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { HotelInfo, HotelInfoImpl } from "@/types";
import { warn } from "console";

const init = async (
  setHotelInfo: Dispatch<SetStateAction<HotelInfo | undefined>>,
  hotelNo: number
) => {
  const res: Response = await fetch(`/api/rakuten/travel?hotelNo=${hotelNo}`);
  const data = await res.json();
  const hotels = data.hotels[0];
  setHotelInfo(
    new HotelInfoImpl(
      hotels.hotel[0].hotelBasicInfo,
      hotels.hotel[1].hotelRatingInfo
    )
  );
};

const CompareArea = (props: any) => {
  const hotelInfos: (HotelInfo | undefined)[] = [];
  const [hotelInfo1, setHotelInfo1] = useState<HotelInfo>();
  const [hotelInfo2, setHotelInfo2] = useState<HotelInfo>();
  const [hotelInfo3, setHotelInfo3] = useState<HotelInfo>();

  useEffect(() => {
    Promise.all([
      init(setHotelInfo1, 28442),
      init(setHotelInfo2, 20574),
      init(setHotelInfo3, 2633),
    ]);
  }, []);

  hotelInfos.push(hotelInfo1);
  hotelInfos.push(hotelInfo2);
  hotelInfos.push(hotelInfo3);

  //console.log("hotelInfos1: ", hotelInfos);

  return (
    <div className="flex">
      {hotelInfos && hotelInfos.length > 0 && hotelInfos[0] ? (
        <GridColumn {...props} hotelInfos={hotelInfos} />
      ) : null}
    </div>
  );
};

export default CompareArea;
