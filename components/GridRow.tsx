"use client";
const env = require("./../env-config");
import { HotelInfo, HotelBasicInfo } from "@/types";
import Image from "next/image";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import BasicMap from "./BasicMap";

interface GridRowProps {
  parentClassName?: string;
  hotelInfos: HotelInfo[];
  itemName: string;
  isHtml?: boolean;
  isImage?: boolean;
  isMap?: boolean;
  imageHeight?: number;
  imageWidth?: number;
  prefix?: any;
  postfix?: any;
  rowHight?: number;
}

const getItem = (columnItem: HotelInfo, itemName: string): string | number => {
  if (itemName == "latitude" || itemName == "longitude") {
    return columnItem && columnItem.hotelBasicInfo
      ? `${columnItem.hotelBasicInfo["latitude"]},${columnItem.hotelBasicInfo["longitude"]},${columnItem.hotelBasicInfo["hotelName"]}`
      : "";
  } else
    return columnItem && columnItem.hotelBasicInfo
      ? columnItem.hotelBasicInfo[itemName as keyof HotelBasicInfo]
      : "";
};

const MyGreatPlace = (props: any) => {
  return <div>{props.text}</div>;
};

const GridRow = ({
  parentClassName,
  hotelInfos,
  itemName,
  isHtml,
  isImage,
  imageHeight,
  imageWidth,
  prefix,
  postfix,
  rowHight,
  isMap,
}: GridRowProps) => {
  if (!Array.isArray(hotelInfos)) {
    return <div>{JSON.stringify(hotelInfos)}</div>;
  }
  const [columnItem1, columnItem2, columnItem3]: HotelInfo[] = hotelInfos;
  const item1: string | number = getItem(columnItem1, itemName);
  const item2: string | number = getItem(columnItem2, itemName);
  const item3: string | number = getItem(columnItem3, itemName);

  const rowStyle = `w-1/4 text-center px-4 text-wrap h-[${rowHight ?? 10}px]`;

  return (
    item1 && (
      <div
        role="row"
        className={`${
          parentClassName ? parentClassName : ""
        } flex w-full gap-6 justify-center items-start`}
      >
        {isHtml ? (
          <>
            <div
              className="w-1/4"
              dangerouslySetInnerHTML={{ __html: item1 }}
            />
            <div
              className="w-1/4"
              dangerouslySetInnerHTML={{ __html: item2 }}
            />
            <div
              className="w-1/4"
              dangerouslySetInnerHTML={{ __html: item3 }}
            />
          </>
        ) : isMap ? (
          <>
            <div className="w-2/3 h-72">
              <BasicMap
                centers={[
                  {
                    lat: Number(String(item1).split(",")[0]),
                    lng: Number(String(item1).split(",")[1]),
                  },
                  {
                    lat: Number(String(item2).split(",")[0]),
                    lng: Number(String(item2).split(",")[1]),
                  },
                  {
                    lat: Number(String(item3).split(",")[0]),
                    lng: Number(String(item3).split(",")[1]),
                  },
                ]}
                hotelNames={[
                  String(item1).split(",")[2],
                  String(item2).split(",")[2],
                  String(item3).split(",")[2],
                ]}
              />
            </div>
          </>
        ) : isImage ? (
          <>
            <Image
              className="object-contain w-1/4"
              src={String(item1)}
              alt="item"
              height={imageHeight ?? 100}
              width={imageWidth ?? 200}
            />
            <Image
              className="object-contain w-1/4"
              src={String(item2)}
              alt="item"
              height={imageHeight ?? 100}
              width={imageWidth ?? 200}
            />
            <Image
              className="object-contain w-1/4"
              src={String(item3)}
              alt="item"
              height={imageHeight ?? 100}
              width={imageWidth ?? 200}
            />
          </>
        ) : (
          <>
            <div className={rowStyle}>
              {prefix}
              {item1}
              {postfix}
            </div>
            <div className={rowStyle}>
              {prefix}
              {item2}
              {postfix}
            </div>
            <div className={rowStyle}>
              {prefix}
              {item3}
              {postfix}
            </div>
          </>
        )}
      </div>
    )
  );
};

export default GridRow;
