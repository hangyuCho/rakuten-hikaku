"use client";
import GridRow from "./GridRow";
const CompareArea = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-4 grid-cols-2 justify-items-center justify-center">
      <GridRow hotelNo="28442" />
      <GridRow hotelNo="20574" />
      <GridRow hotelNo="2633" className="hidden sm:grid" />
    </div>
  );
};

export default CompareArea;
