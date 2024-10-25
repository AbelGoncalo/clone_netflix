import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  menuHeader:{
    width:'100%',
    height:38,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  flatListContainer:{
    width:'100%',
    height:100,
    marginTop:10,
    marginBottom:50,
   
  },
  oval:{
    backgroundColor:'#E50914',
    padding:2.4,
    width:90,
    height:90,
    borderRadius:90,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  capa:{
    height:85,
    width:85,
    borderRadius:85
  },
  logo:{
    width:90,
    height:45,
    position:'absolute',
    zIndex:10,
    bottom:10,
    alignSelf:'center',
  },
  previaContainer:{
    width:'100%',
    marginTop:50
  },
  previaTitle:{
    color:'#fff',
    marginLeft: 20
  },
 
});

export default styles;
