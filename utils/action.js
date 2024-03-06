"use server"

export const getSearchedCocktails = async (prevState, formData) => {
  const searchQuery = formData.get("searchField")

  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    return "Something went wrong"
  }
}
