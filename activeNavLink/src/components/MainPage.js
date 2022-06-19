import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'

const MainPage = () => {
  return (
    <React.Fragment>
    <section className="border border-blue-900 md:w-2/5 md:mx-auto">
      <div>
          <Navbar/>
      </div>

      <div>
        <NavPage/>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage