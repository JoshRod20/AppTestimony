import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Testimony from './Components/Testimony';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('./Images/FreeCodeCamp_logo.png')} />

      <ScrollView style={styles.scroll}>
      <Text style={styles.text1}>Esto es lo que nuestros alumnos sobre FreeCodeCamp:</Text>
        <Testimony 
          name="Shawn Wang"
          country="Singapur"
          post="Ingeniero de Software"
          company="Amazon"
          picture={require('./Images/imagen-Shawn.6e3957dee53553d3dfeb.png')}
          testimony="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />
        <Testimony 
          name="Sarah Chima "
          country="Nigeria"
          post="Ingeniera de Software"
          company="ChatDesk"
          picture={require('./Images/imagen-Sarah.8cb45da000a892ddedb7.png')}
          testimony="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro."
        />
        <Testimony 
          name="Emma Bostian"
          country="Suecia"
          post="Ingeniera de Software"
          company="Spotify"
          picture={require('./Images/imagen-Emma.f3d0164a85be9e531258.png')}
          testimony="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 80,
    width: '100%',
    marginTop:30,
  },
  scroll: {
    width: '100%',
  },
  text1:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:10,
  },
});
