import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native'

import { connect } from 'react-redux'
import { isSignedIn } from './../actions/auth'

class SignIn extends Component {

    submit() {

    }

    render() {
        return(
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                />

                <Button
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
            </View>
        )
    }
}
const mapStateToProps = store => ({
    user: store.auth.user
  })
export default connect(mapStateToProps, { isSignedIn })(SignIn)