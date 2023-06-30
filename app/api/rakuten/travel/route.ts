const handler = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const hotelNo = searchParams.get("hotelNo") ?? 28442;
  console.log("searchParams : ", searchParams);
  console.log("hotelNo : ", hotelNo);
  const res: Response = await fetch(
    `https://app.rakuten.co.jp/services/api/Travel/HotelDetailSearch/20170426?applicationId=${process.env.API_KEY}&format=json&hotelNo=${hotelNo}`
  );

  if (res.ok) {
    const json: any = await res.json();
    return new Response(JSON.stringify(json));
  } else return new Response(JSON.stringify(null));
};

export { handler as GET };
