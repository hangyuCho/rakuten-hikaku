const handler = async (request: Request) => {
  //const body: any = await request.json();

  const res: Response = await fetch(
    `https://app.rakuten.co.jp/services/api/Travel/HotelDetailSearch/20170426?applicationId=${process.env.API_KEY}&format=json&hotelNo=28442`
  );

  console.log("ok: ", res.ok);
  if (res.ok) {
    const json: any = await res.json();
    return new Response(JSON.stringify(json));
  } else return new Response(JSON.stringify(null));
};

export { handler as GET };
