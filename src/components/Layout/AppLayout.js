import React from 'react'
import TopNav from './Topnav'
import Footer from './Footer'

const AppLayout = ({ containerClassnames, children, history }) => {
  return (
    <div id="app-container" className={containerClassnames}>
      <TopNav history={history} />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
