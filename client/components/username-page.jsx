import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { history } from '../redux'

import Head from './head'

const UsernamePage = () => {
  const { userName } = useParams()
  const [repos, setRepos] = React.useState([])

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((it) => it.json())
      .then((it) => setRepos(it))
  }, [])

  const onClickGoBack = () => {
    history.push('/browser')
  }

  return (
    <>
      <Head title="Hello" />
      <div className=" h-screen bg-red-100">
        <div className="flex flex-col justify-center">
          <div className="flex gap-x-20  justify-between w-full p-14 bg-neutral-900  shadow-lg shadow-neutral-900/75">
            <span className="text-white text-3xl text-center font-semibold">
              Repositories for user: {userName}
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
              <div className="text-white text-xl text-rigth m-6 font-semibold ">
                {repos.map((it) => {
                  return (
                    <li key={it.id}>
                      <Link to={`/browser/${userName}/${it.name}`}>{it.name}</Link>
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

UsernamePage.propTypes = {}

export default React.memo(UsernamePage)
