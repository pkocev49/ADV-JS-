let mkdUrl = " https://restcountries.com/v3.1/alpha/";

const getCounttry = async (country) => {
  const response = await fetch(`${mkdUrl}${country}`);
  const data = await response.json();
  console.log("Country MKD:", data);
  data.forEach(async (border) => {
    const responseZero = await fetch(`${mkdUrl}${border.borders[0]}`);
    const borderData = await responseZero.json();
    const responseOne = await fetch(`${mkdUrl}${border.borders[1]}`);
    const BgData = await responseOne.json();
    const responseTwo = await fetch(`${mkdUrl}${border.borders[2]}`);
    const grcData = await responseTwo.json();
    const responseThree = await fetch(`${mkdUrl}${border.borders[3]}`);
    const unkData = await responseThree.json();
    const responseFour = await fetch(`${mkdUrl}${border.borders[4]}`);
    const srbData = await responseFour.json();
    console.log("Neighbours:");
    console.log("Albania:", borderData);
    console.log("Bugarija:", BgData);
    console.log("Greece:", grcData);
    console.log("Kosovo:", unkData);
    console.log("Srbija:", srbData);
  });
};
getCounttry("MKD");
