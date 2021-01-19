import React from 'react'
//import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'

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
/*
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);
*/
