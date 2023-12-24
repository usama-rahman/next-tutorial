import Link from "next/link";

const DrinkList = ({ drinks }) => {
  return (
    <ul>
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              {/* <div className="relative h-48 mb-4 "></div> */}
              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinkList;
