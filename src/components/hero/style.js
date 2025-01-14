import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    hero:{
        height:400,
        width:'100%'
    },
    logo:{
       marginTop:200,
       alignSelf:'center',
       width:300,
       height:150,
       position:'absolute',
       zIndex:10  
    },
    containerTop10:{
        position:'absolute',
        zIndex:10,
        bottom:50,
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
        alignItems:'center'
       
    },
    top10Bage:{
        width:60,
        height:60,
        marginRight:20
    },
    top10Text:{
        color: '#ffffff',
        fontSize:15
    },
    gradient:{
        width:'100%',
        height:150,
        position:'absolute',
        zIndex:9,
        bottom:0
    }
})
export default styles;