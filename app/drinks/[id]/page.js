import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import drinkImg from "./drink.jpg";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch a drink ... ");
  }
  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="bg-gray-400 p-2 rounded mb-4">
        Back to Drinks
      </Link>

      <img
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded shadow-lg my-4"
        priority
        alt=""
      />
      {/* <img className="my-3 w-48 h-48 rounded-md" src={drinkImg.src} /> */}
      <h1 className="mt-3"> {title} </h1>
    </div>
  );
};

export default SingleDrinkPage;
