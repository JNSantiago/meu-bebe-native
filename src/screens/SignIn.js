import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux'
import { isSignedIn } from './../actions/auth'

import { colors } from './../theme'

class SignIn extends Component {

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit() {

    }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.logoPmt} source={require('./../assets/logoPMT.png')} />

                <View style={styles.inputWithIcon}>
                    <Icon style={styles.inputIcon} name="envelope-o" size={20} color="#000"/>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email"
                    />
                </View>

                <View style={styles.inputWithIcon}>
                    <Icon style={styles.inputIcon} name="lock" size={20} color="#000"/>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                    />
                </View>

                <TouchableOpacity onPress={this.submit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.submit} style={styles.facebookButton}>
                    <Icon name="facebook-square" style={{alignSelf: 'center'}} size={12} color="#FFF">
                        <Text style={styles.facebookText}> Entrar com o facebook</Text>
                    </Icon>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.submit} style={styles.gmailButton}>
                    <Icon name="google" style={{alignSelf: 'center'}} size={12} color="#FFF">
                        <Text style={styles.gmailText}> Entrar com o Gmail</Text>
                    </Icon>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    logoPmt: {
        marginTop: 12,
        marginBottom: 12,
        width: '100%',
        height: '28%',
        resizeMode: 'contain'
    },
    inputWithIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 12,
        borderBottomWidth: 1,
        flex: 1
    },
    inputIcon: {
        padding: 10,
    },
    submitButton: {
        marginTop: 24,
        alignSelf: 'center',
    },
    submitButtonText: {
        fontSize: 16,
        color: colors.primary,
        fontWeight: 'bold',
    },
    facebookButton: {
        borderRadius: 50,
        backgroundColor: colors.facebook,
        padding: 12,
        marginTop: 24,
        width: '80%',
        alignSelf: "center"
    },
    facebookText: {
        fontWeight: 'bold',
        color: 'white',
        alignSelf: "center"
    },
    gmailButton: {
        borderRadius: 50,
        backgroundColor: colors.gmail,
        padding: 12,
        marginTop: 24,
        width: '80%',
        alignSelf: "center"
    },
    gmailText: {
        fontWeight: 'bold',
        color: 'white',
        alignSelf: "center"
    }
})

const mapStateToProps = store => ({
    user: store.auth.user
  })
export default connect(mapStateToProps, { isSignedIn })(SignIn)