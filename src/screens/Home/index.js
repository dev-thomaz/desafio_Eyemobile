import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native'
import ViewPager from '@react-native-community/viewpager';
import LinearGradient from 'react-native-linear-gradient';
import StatusBarColor from '../../components/StatusBarColor'


const initiaState = {
    displayValue: 0, 
    page_Selected: 0
}

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initiaState
        };
    }


    formatValue(value) {
        let retorno

        retorno = (parseFloat(value) / 100).toFixed(2).toString().replace('.', ',');


        return retorno
    }

    addDigito = n => {
        let newValue = this.state.displayValue
        newValue = `${newValue}${n}`

        this.setState({
            displayValue: newValue
        });

    }

    delDigito = () => {
        let newValue = this.state.displayValue.toString()
        if (newValue > 0) {
            newValue = newValue.slice(0, -1)
            this.setState({
                displayValue: newValue
            })
        }

    }

    pageSelected = e => {
        let page = e.nativeEvent.position
        this.setState({ page_Selected: page })
    }

    render() {
        var value = this.state.displayValue
        var pageSelected = this.state.page_Selected
        return (
            <View style={styles.container}>
                <StatusBarColor backgroundColor="#511F86" barStyle="light-content" />
                <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.5 }} colors={['#682DB5', '#B55EC5']} style={styles.linearGradient}>

                    <View style={styles.priceArea}>
                        <View style={styles.priceNumbers}>
                            <Text style={styles.currency}>R$</Text>
                            <Text style={styles.priceValue}>{this.formatValue(value)}</Text>
                        </View>

                        <Text style={styles.txt}>TOTAL A PAGAR</Text>
                    </View>

                    <View style={styles.keyboardArea}>
                        <TouchableOpacity onPress={() => {
                            this.addDigito(1)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.addDigito(2)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.addDigito(3)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.addDigito(4)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.addDigito(5)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.addDigito(6)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>6</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.addDigito(7)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>7</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.addDigito(8)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>8</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.addDigito(9)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>9</Text>
                        </TouchableOpacity>

                        <View style={styles.blankArea}></View>
                        <TouchableOpacity onPress={() => {
                            this.addDigito(0)
                        }} style={styles.bntContainer}>
                            <Text style={styles.btnTxt}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.delDigito()
                        }} style={styles.bntContainer}>
                            <Image source={require('../../../assets/Images/backSpace.png')} style={{ width: 30, height: 30 }}></Image>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.scrollActionArea}>
                        <View style={styles.menuArea}>

                            <ViewPager initialPage={0} onPageScroll={event => this.pageSelected(event)} style={styles.optPaymentArea} >

                                <View style={{ width: '100%', alignItems: "center", justifyContent: 'center', flexDirection: 'row', }} key="1">

                                    <View style={styles.optPayment}>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate('Comprovante', { payment_type: 'Dinheiro', value })
                                        }}>
                                            <Image source={require('../../../assets/Icones/ic_money.svg')} style={styles.icons}></Image>
                                            <Text style={styles.formTxt}>DINHEIRO</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.optPayment}>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate('Comprovante', { payment_type: 'Débito', value })
                                        }}>
                                            <Image source={require('../../../assets/Icones/ic_debit.svg')} style={styles.icons}></Image>
                                            <Text style={styles.formTxt}>DÉBITO</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.optPayment}>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate('Comprovante', { payment_type: 'Crédito', value })
                                        }}>
                                            <Image source={require('../../../assets/Icones/ic_credit.svg')} style={styles.icons}></Image>
                                            <Text style={styles.formTxt}>CRÉDITO</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                <View style={{ width: '100%', alignItems: "center", justifyContent: 'center', flexDirection: 'row', }} key="2">

                                    <View style={styles.optPayment}>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate('Comprovante', { payment_type: 'Vale Refeição', value })
                                        }}>
                                            <Image source={require('../../../assets/Icones/ic_vr.svg')} style={styles.icons}></Image>
                                        </TouchableOpacity>
                                        <Text style={styles.formTxt}>V.R.</Text>
                                    </View>

                                    <View style={styles.optPayment}>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate('Comprovante', { payment_type: 'Cupom', value })
                                        }}>
                                            <Image source={require('../../../assets/Icones/ic_cupom.svg')} style={styles.icons}></Image>
                                            <Text style={styles.formTxt}>CUPOM</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </ViewPager>
                            <View >
                                {pageSelected == 0 ? (
                                    <View style={styles.paginatioArea}>
                                        <View style={styles.paginationDotSelected}></View>
                                        <View style={styles.paginationDot}></View>
                                    </View>
                                ) : (
                                    <View style={styles.paginatioArea}>
                                        <View style={styles.paginationDot}></View>
                                        <View style={styles.paginationDotSelected}></View>
                                    </View>
                                )}

                            </View>
                        </View>

                    </View>
                </LinearGradient>
            </View>
        )
    }
}
/**
 *  <View >
                                        <Image source={require('../../../assets/Icones/ic_money.svg')} style={styles.icons}></Image>
                                        <Text style={styles.formTxt}>DINHEIRO</Text>
                                    </View>
                                    <View style={styles.optPayment}>
                                        <Image source={require('../../../assets/Icones/ic_debit.svg')} style={styles.icons}></Image>
                                        <Text style={styles.formTxt}>DÉBITO</Text>
                                    </View>
                                    <View style={styles.optPayment}>
                                        <Image source={require('../../../assets/Icones/ic_credit.svg')} style={styles.icons}></Image>
                                        <Text style={styles.formTxt}>CRÉDITO</Text>
                                    </View>
                                
                                <View style={styles.optPaymentArea}>
                                    <View style={styles.optPayment}>
                                        <Image source={require('../../../assets/Icones/ic_vr.svg')} style={styles.icons}></Image>
                                        <Text style={styles.formTxt}>V.R.</Text>
                                    </View>
                                    <View style={styles.optPayment}>
                                        <Image source={require('../../../assets/Icones/ic_cupom.svg')} style={styles.icons}></Image>
                                        <Text style={styles.formTxt}>CUPOM</Text>
                                    </View>
                                </View>
 */
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
    priceArea: {
        alignItems: 'center',
        width: '100%',
        top: 25
    },
    priceNumbers: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    currency: {
        color: '#FFFFFF',
        fontSize: 40,
        top: 10,
        marginRight: 10,
        fontFamily: "DINCondensed-Bold"
    },
    priceValue: {
        color: '#FFFFFF',
        fontSize: 60,
        fontFamily: "DINCondensed-Bold"
    },
    txt: {
        color: '#FFFFFF',
        fontFamily: "DINCondensed-Bold",
        fontSize: 18
    },
    keyboardArea: {
        justifyContent: 'center',
        width: '100%',
        top: 35,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'stretch',
        flexWrap: 'wrap',
    },
    bntContainer: {
        borderColor: '#E8CDF2',
        borderWidth: 1,
        padding: 10,
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12
    },
    btnTxt: {
        color: '#FFFFFF',
        fontSize: 30,
        fontFamily: "DINCondensed-Bold"
    },
    blankArea: {
        margin: 12,
        width: 70
    },
    scrollActionArea: {
        justifyContent: 'flex-end',
        flex: 1
    },
    menuArea: {
        backgroundColor: 'white',
        width: '90%',
        marginLeft: '5%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        overflow: 'hidden',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        height: 100,
        elevation: 14,
    },
    optPaymentArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        marginHorizontal: 40,
        flex: 1
    },
    optPayment: {
        marginHorizontal: 15
    },

    icons: {
        width: 35,
        height: 35,
        marginBottom: 10
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#dedede',
        marginHorizontal: 5,
    },
    paginationDotSelected: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#7D39DB',
        marginHorizontal: 5
    },
    paginatioArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        bottom: 8,

    },
    formTxt: {
        fontFamily: "DINCondensed-Bold",
        fontSize: 15,
        textAlign: 'center'
    }

})