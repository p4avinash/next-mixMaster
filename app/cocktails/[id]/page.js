import Image from "next/image"
import React from "react"
import Link from "next/link"

const getSingleCocktail = async (id) => {
  // await new Promise((resolve) => resolve, 5000)
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  )

  if (!response.ok) {
    throw new Error("Nahi mila drinks data")
  }

  const data = await response.json()
  return data
}

const CocktailDetails = async ({ params }) => {
  const data = await getSingleCocktail(params.id)
  const {
    strDrink,
    strDrinkThumb,
    idDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strVideo,
  } = data?.drinks[0]

  const validIngredients = Object.keys(data.drinks[0])
    .filter(
      (key) => key.startsWith("strIngredient") && data.drinks[0][key] !== null
    )
    .map((key) => data.drinks[0][key])
    .join(", ")

  const validMeasures = Object.keys(data.drinks[0])
    .filter(
      (key) => key.startsWith("strMeasure") && data.drinks[0][key] !== null
    )
    .map((key) => data.drinks[0][key])
    .join(", ")

  return (
    <div className='mt-10 p-6'>
      <div className=''>
        <div className='button-container flex justify-center mb-6'>
          <Link href={"/"}>
            <button className='btn btn-primary'>Back To Drinks Page</button>
          </Link>
        </div>

        <div className='details flex flex-col sm:flex-row md:flex-row lg:flex-row'>
          <div className='image-container '>
            <Image
              className='rounded-lg w-[350px]'
              src={strDrinkThumb}
              width={350}
              height={0}
              alt={idDrink}
              priority
            />
          </div>

          <div className='more-info px-5  ml-0 sm:ml-0 md:ml-10 lg:ml-20 mt-10 sm:mt-0 md:mt-0 lg:mt-0 font-bold flex flex-col justify-center '>
            <div className='category flex items-center mb-4'>
              <span className='bg-primary text-primary-content p-1 rounded-lg mr-4'>
                Name:
              </span>
              <p className='text-secondary'>{strDrink}</p>
            </div>

            <div className='category flex items-center mb-4'>
              <span className='bg-primary text-primary-content p-1 rounded-lg mr-4'>
                Category:
              </span>
              <p className='text-secondary'>{strCategory}</p>
            </div>

            <div className='category flex items-center mb-4'>
              <span className='bg-primary text-primary-content p-1 rounded-lg mr-4'>
                Info:
              </span>
              <p className='text-secondary'>{strAlcoholic}</p>
            </div>

            <div className='category flex items-center mb-4'>
              <span className='bg-primary text-primary-content p-1 rounded-lg mr-4'>
                Glass:
              </span>
              <p className='text-secondary'>{strGlass}</p>
            </div>

            <div className='category flex items-center mb-4'>
              <span className='bg-primary text-primary-content p-1 rounded-lg mr-4'>
                Ingredients:
              </span>
              <p className='text-secondary'>{validIngredients}</p>
            </div>

            <div className='category flex items-center mb-4'>
              <span className='bg-primary text-primary-content p-1 rounded-lg mr-4'>
                Instructions:
              </span>
              <p className='text-secondary'>{strInstructions}</p>
            </div>

            <div className='category flex items-center mb-4'>
              <span className='bg-primary text-primary-content p-1 rounded-lg mr-4'>
                Measures:
              </span>
              <p className='text-secondary'>{validMeasures}</p>
            </div>

            {strVideo && (
              <div className='category flex items-center mb-4'>
                <span className='bg-primary text-primary-content p-1 rounded-lg mr-4'>
                  Video:
                </span>
                <a
                  href={strVideo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-secondary font-semibold text-blue-800'
                >
                  {`Click here to open the video link for ${strDrink}`}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CocktailDetails
