import React, {Component} from 'react'
import { StatusBar } from 'react-native'

import {connect} from 'react-redux'
import { bindActionsCreators } from 'redux'

import { isSignedIn } from './actions/auth'

import Home from './screens/Home'
import AuthTabs from './screens/AuthTabs'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      logged: false
    }

    if (this.props.isSignedIn()) this.setState({logged: true})
  }

  render() {
    if (this.state.logged) {
      return (
        <Home />
      )
    }
      return (
        <AuthTabs />
      )
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
})
export default connect(mapStateToProps, { isSignedIn })(App)