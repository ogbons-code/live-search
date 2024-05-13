
import React, { useState, useEffect } from "react";
import allUsers from "./objects.json"


const App = () => {

  const [liveSearch, setLiveSearch] = useState()
  const [users, setUsers] = useState(allUsers);

  useEffect(() => {

  }, [users])



  const handleInput = (event) => {
    setLiveSearch(event.target.value)
  }

  const buttonClick = () => {
    //console.log(allUsers);

    if (allUsers && liveSearch) {
      let filteredUsers = allUsers.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(liveSearch.toLowerCase()) ||
          user.lastName.toLowerCase().includes(liveSearch.toLowerCase()) ||
          user.city.toLowerCase().includes(liveSearch.toLowerCase()) ||
          user.country.toLowerCase().includes(liveSearch.toLowerCase())
        );
      });

      // console.log(filteredUsers);
      setUsers(filteredUsers);
    } else {
      setUsers(allUsers);
    }
  }

  return (
    <>

      <div className="bg-blue-700 opacity-90 w-80 md:w-1/2 mx-auto mt-10 rounded-md">
        <h2 className="text-white pt-4 text-4xl font-bold ps-2
                   opacity-95 text-center mb-5">Live User Filter</h2>
        <label htmlFor="search" className=" flex justify-center text-white text-xl 
                font-semibold ps-4">Search by name and/or location</label>
        <input type="search" placeholder="search" id="search"
          className="block mx-auto bg-blue-900 mt-5 w-52 sm:w-72 md:w-80 lg:w-96 
            rounded-lg py-2 ps-2 pe-2 mb-3 text-white" onChange={handleInput} />
        <button className="block mx-auto  bg-lime-500 hover:bg-lime-600 ... px-10
               py-2 mb-2 rounded-md text-white"
          onClick={buttonClick}>Search</button>

        <div className="bg-white w-100 shadow-lg py-5" id="mainSection">
          {
            users && users.map((user, index) => {
              return (

                <figure className="border-b-4 py-20 mb-2" key={Math.random()}>
                  <img className="w-40 h-32 me-3 rounded-md ms-5 float-left" src={user.image} />
                  <article className="font-bold text-lg">
                    <strong>{index + 1}</strong>: {user.firstName} {user.lastName}
                  </article>
                  <figcaption>{user.city} {user.country}</figcaption>
                </figure>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App


