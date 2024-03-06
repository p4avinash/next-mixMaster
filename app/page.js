import CocktailsList from "@/components/CocktailsList"

const getCocktailsData = async () => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const data = await getCocktailsData()

  return (
    <div>
      <CocktailsList data={data} />
    </div>
  )
}
