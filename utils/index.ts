export const fetchByHotelInfo = async () => {
  const res: Response = await fetch("/api/rakuten/travel");
  const data = await res.json();
  return data.hotels[0];
};
