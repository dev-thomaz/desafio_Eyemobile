import React, { Component } from 'react';
import accounting from 'accounting'
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
} from 'react-native'
import ViewPager from '@react-native-community/viewpager';
import LinearGradient from 'react-native-linear-gradient';
import StatusBarColor from '../../components/StatusBarColor'
import moment from 'moment'
import 'moment/locale/pt-br'



export default class Comprovante extends Component {



    formatValue(value) {
        let retorno

        retorno = (parseFloat(value) / 100).toFixed(2).toString().replace('.', ',');


        return retorno
    }

    render() {
        const today = moment().locale('pt-br').format('D[/]MM[/]YYYY[ ]h:mm:ss')
        const value = this.props.navigation.state.params.value
        const payment_type = this.props.navigation.state.params.payment_type
        return (
            <View style={styles.container}>
                <StatusBarColor backgroundColor="#259B7F" barStyle="light-content" />
                <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.5 }} colors={['#38D7AC', '#B876D3']} style={styles.linearGradient}>
                    <View style={styles.header}>
                        <View s>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Home')
                            }}>
                                <Image source={require('../../../assets/Images/arrow.png')} style={styles.iconBack}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.couponArea}>
                            <Text style={styles.headerTitle}>PAGAMENTO REALIZADO COM SUCESSO</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', alignItens: 'center', justifyContent: 'center', width: '100%' }}>
                        <ImageBackground source={require('../../../assets/Images/Recibo_background.png')} style={styles.coupon}>
                            <View style={styles.logoArea}>
                                <Image source={require('../../../assets/Icones/ic_logo.svg')} style={styles.logo}></Image>
                            </View>
                            <View style={styles.infoArea}>
                                <Text style={styles.nameInc}>
                                    Eyemobile Tecnologia LTDA.
                                </Text>
                                <Text style={styles.addressInfo}>
                                    Rua Airton Roberto de Oliveira Número 64
                                </Text>
                            </View>
                            <Text style={styles.valueTxt}>R${this.formatValue(value)}</Text>
                            <Text style={styles.typePayment}>{payment_type}</Text>
                            <Text style={styles.time}>{today}</Text>
                        </ImageBackground>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Home')
                            }}>
                                <Text style={styles.btnTxt}>CONFIRMAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </LinearGradient>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#682DB5'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    header: {
        flexDirection: 'row',
        top: 20


    },
    iconBack: {
        width: 20,
        height: 20,

    },
    headerTitle: {
        color: '#FFFFFF',
        justifyContent: 'center',
        fontFamily: "DINCondensed-Bold",
        fontSize: 19

    },
    couponArea: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    coupon: {
        width: 250,
        height: 440,
        alignSelf: 'center',
        alignItems: 'center'
    },
    logoArea: {
        marginTop: 70
    },
    logo: {
        width: 180,
        height: 30,
        resizeMode: 'stretch',

    },
    infoArea: {
        marginTop: 50,
        alignItems: 'center'
    },
    nameInc: {
        color: '#666',
        fontFamily: 'Tahoma-Bold',
        fontSize: 14
    },
    addressInfo: {
        fontFamily: 'Tahoma',
        color: '#666',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 25,
        marginTop: 10
    },
    valueTxt: {
        fontFamily: 'Tahoma-Bold',
        fontSize: 25,
        color: '#666',
        marginTop: 10
    },
    typePayment: {
        color: '#666',
        fontFamily: 'Tahoma',
        marginTop: 10
    },
    time: {
        color: '#666',
        fontFamily: 'Tahoma',
        marginTop: 30

    },
    button: {
        backgroundColor: '#3BDCAA',
        borderRadius: 25,
        width: 150,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    btnTxt: {
        color: 'white',
        fontFamily: "DINCondensed-Bold",

    }
})