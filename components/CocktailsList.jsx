"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Searchbar from "./Searchbar"
import { useDispatch, useSelector } from "react-redux"
import { setCocktailsDataToStore } from "@/utils/slices/cocktailSlice"

const CocktailsList = ({ data }) => {
  const dispatch = useDispatch()
  const cocktails = useSelector((store) => store.cocktails.cocktails)

  if (cocktails === null) {
    dispatch(setCocktailsDataToStore(data))
  }

  return (
    <div>
      <Searchbar />
      <div className='flex flex-wrap gap-6 justify-center mt-16'>
        {cocktails?.drinks.map((drink) => (
          <div key={drink.idDrink} className='card p-4 w-[18rem] shadow-2xl'>
            <Image
              className='rounded-lg'
              src={drink.strDrinkThumb}
              alt='cocktail'
              width={270}
              height={0}
              priority
            />
            <div className='pt-2 '>
              <h2 className='card-title justify-center'>{drink.strDrink}</h2>

              <div className='card-actions justify-center mt-2'>
                <Link href={`/cocktails/${drink.idDrink}`}>
                  <button className='btn btn-primary'>More Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CocktailsList
