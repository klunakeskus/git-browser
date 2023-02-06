import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { history } from '../redux'

import Head from './head'

const Readme = () => {
  const { userName, repoName } = useParams()
  const [readme, setReadme] = useState('')

  React.useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${userName}/${repoName}/master/README.md`)
      .then((it) => it.text())
      .then((it) => setReadme(it))
  }, [])

  const onClickGoBack = () => {
    history.push(`/browser/${userName}`)
  }

  return (
    <>
      <Head title="Hello" />
      <div className=" h-full w-full bg-red-100">
        <div className="flex flex-col justify-center">
          <div className="flex gap-x-20  justify-between w-full p-14 bg-neutral-900  shadow-lg shadow-neutral-900/75">
            <span className="text-white text-3xl text-center font-semibold mr-10">
              ReadMe file for repository: {repoName}
            </span>
            <button
              className=" text-white text-xl text-center font-semibold rounded-full  bg-neutral-900  p-4 ring-1 ring-neutral-400/50 opacity-75 hover:opacity-100"
              type="button"
              onClick={onClickGoBack}
            >
              Go back
            </button>
          </div>
          <div className="flex  justify-center items-top">
            <div className="flex w-full p-14 m-11 bg-neutral-900 rounded-lg shadow-lg shadow-neutral-900/75">
              <div className="text-white text-l text-rigth m-6 font-regular leading-8 ">
               <ReactMarkdown>{readme}</ReactMarkdown> 
                </div>
           
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
