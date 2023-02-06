import React from 'react'
import { history } from '../redux'

import Head from './head'

const Browser = () => {
  const [value, setValue] = React.useState('')
  const onInputChange = (e) => {
    setValue(e.target.value)
  }
  const onSearchClick = () => {
    history.push(`/browser/${value}`)
  }

  return (
    <>
      <Head title="Hello" />
      <div className="flex row justify-center items-center h-screen bg-red-100">
        <div className="flex flex-col justify-center grow bg-neutral-900  p-1 m-20  rounded-xl select-none shadow-lg shadow-neutral-900/75">
          <div className="flex gap-x-2 justify-start  ml-5 mt-2 mr-1">
            <img alt="github" src="images/GitHub.svg" />

            <span className="text-white text-bottom text-xl font-semibold ">Browse the GitHub</span>
          </div>
          <div className="flex gap-x-2 justify-start m-2.5">
            <input
              className=" rounded-lg bg-neutral-700 w-full p-2 text-white text-bottom text-xl font-regular  ring-1 ring-neutral-400/50  opacity-75 hover:opacity-100"
              type="text"
              value={value}
              onChange={onInputChange}
              placeholder="Enter username..."
            />
            <button
              className="rounded-full  bg-neutral-700  p-3 ring-1 ring-neutral-400/50 opacity-75 hover:opacity-100"
              type="button"
              onClick={onSearchClick}
            >
              <img alt="search" src="images/Search.svg" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

Browser.propTypes = {}

export default React.memo(Browser)
