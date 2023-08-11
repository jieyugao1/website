import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import About from '../../pages/Research/Research'
import Teaching from '../../pages/Teaching/Teaching'

const RoutesComponent = props => {
  const location = useLocation()

  return (
    <TransitionGroup >
      <CSSTransition
        timeout={300}
        classNames='fade'
        key={location.pathname}>
        <Routes>
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/research" element={<About />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>

  )

}

export default RoutesComponent