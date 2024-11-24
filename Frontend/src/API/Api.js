export const getHomeData = async () => {
  const response = await fetch("http://127.0.0.1:5000/");
  const data = await response.json();
  return data;
};
export const getData = async () => {
  const response = await fetch("http://127.0.0.1:5000/api/data");
  const data = await response.json();
  return data;
};
