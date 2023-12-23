const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const DrinksPage = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1 className="text-xl">DrinksPage</h1>
    </div>
  );
};

export default DrinksPage;
