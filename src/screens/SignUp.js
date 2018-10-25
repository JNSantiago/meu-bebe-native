import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'

import {connect} from 'react-redux'

class SignUp extends Component {

  render() {
    return(
        <View>
            <Text>Cadastrar</Text>
        </View>
    )
  }
}

export default connect(null, null)(SignUp)