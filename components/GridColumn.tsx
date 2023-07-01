"use client";
import { HotelInfo } from "@/types";
import { GridRow } from "@/components";

interface GridColumnProps {
  hotelInfos: HotelInfo[];
  className?: string;
}

const GridColumn = ({ hotelInfos, className }) => {
  const parentClassName = className;
  const [hotelInfo1, hotelInfo2, hotelInfo3]: (HotelInfo | undefined)[] =
    hotelInfos ?? [];
  return hotelInfos.length > 0 &&
    hotelInfo1 &&
    hotelInfo1.hotelBasicInfo &&
    hotelInfo2 &&
    hotelInfo2.hotelBasicInfo &&
    hotelInfo3 &&
    hotelInfo3.hotelBasicInfo ? (
    <div className={parentClassName}>
      {/* 
      <GridRow hotelInfos={hotelInfos} itemName="dpPlanListUrl" isImage={true}  />
      <GridRow hotelInfos={hotelInfos} itemName="hotelInformationUrl" />
      <GridRow hotelInfos={hotelInfos} itemName="reviewUrl" />
      <GridRow hotelInfos={hotelInfos} itemName="planListUrl" />
      <GridRow
        hotelInfos={hotelInfos}
        itemName="hotelThumbnailUrl"
        isImage={true}
      />
      <GridRow
        hotelInfos={hotelInfos}
        itemName="roomThumbnailUrl"
        isImage={true}
      />
      <GridRow hotelInfos={hotelInfos} itemName="longitude" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="faxNo" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="hotelNo" />
      <hr />
      */}
      <GridRow
        hotelInfos={hotelInfos}
        itemName="hotelImageUrl"
        isImage={true}
      />
      <GridRow hotelInfos={hotelInfos} itemName="roomImageUrl" isImage={true} />
      <GridRow
        hotelInfos={hotelInfos}
        itemName="hotelMapImageUrl"
        isImage={true}
      />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="hotelKanaName" />
      <GridRow hotelInfos={hotelInfos} itemName="hotelName" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="access" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="address1" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="address2" />
      <hr />
      <GridRow
        hotelInfos={hotelInfos}
        itemName="hotelMinCharge"
        prefix={<span className="text-rose-500">最低 </span>}
        postfix={" 円"}
      />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="hotelSpecial" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="latitude" isMap={true} />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="nearestStation" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="parkingInformation" />
      <GridRow hotelInfos={hotelInfos} itemName="postalCode" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="reviewAverage" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="reviewCount" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="telephoneNo" />
      <hr />
      <GridRow hotelInfos={hotelInfos} itemName="userReview" isHtml={true} />
    </div>
  ) : null;
};

export default GridColumn;
