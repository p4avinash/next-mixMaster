"use client"
import { getSearchedCocktails } from "@/utils/action"
import { setCocktailsDataToStore } from "@/utils/slices/cocktailSlice"
import { useEffect } from "react"
import { useFormStatus, useFormState } from "react-dom"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button type='submit' disabled={pending} className='btn btn-primary ml-2'>
      {pending ? "Searching..." : "Search"}
    </button>
  )
}

const initialState = {}

const Searchbar = () => {
  const dispatch = useDispatch()
  const [state, formAction] = useFormState(getSearchedCocktails, initialState)

  useEffect(() => {
    if (state.drinks) {
      dispatch(setCocktailsDataToStore(state))
    } else if (state.drinks === null) {
      toast.error("No Result Found!!")
    }
  }, [state])

  return (
    <form
      action={formAction}
      className='m-8 w-3/3 flex justify-center items-center'
    >
      <div className='w-3/3 sm:w-2/3 md:w-2/3 lg:w-2/3 shadow-2xl p-6 rounded-xl  flex justify-center'>
        <input
          type='text'
          placeholder='Search Drinks...'
          className=' input input-bordered w-full max-w-xs'
          name='searchField'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  )
}

export default Searchbar
