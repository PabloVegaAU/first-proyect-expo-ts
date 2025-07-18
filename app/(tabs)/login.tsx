import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useForm } from '@tanstack/react-form'
import { Image } from 'expo-image'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { schema } from './schema'
import axios from 'axios'


export default function LoginScreen() {
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await axios.post('https://fdrtzxg1-8080.brs.devtunnels.ms/v1/core/api/auth/login', {
          username: value.username,
          password: value.password,
        })
    
        console.log(response.data)
      } catch (error: any) {
        console.error(error.response?.data || error.message)
      }
    }
    
  })
  

  const [, forceUpdate] = useState(0)

  useEffect(() => {
    const unsub = form.store.subscribe(() => {
      forceUpdate((n) => n + 1)
    })
    return unsub
  }, [form.store])


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">LOGIN</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.formContainer}>
        
        <ThemedText type="subtitle" style={{ color: 'black' }}>Usuario</ThemedText>
        <form.Field
          name="username"
          validators={{ onChange: schema.shape.username }}
        >
          {(field) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="👤"
                value={field.state.value}
                onChangeText={field.handleChange}
              />
              {field.state.meta.errors?.length > 0 && (
                <Text style={styles.errorText}>
                  {String(field.state.meta.errors[0]?.message || field.state.meta.errors[0])}
                </Text>
              )}
            </>
          )}
        </form.Field>

        <ThemedText type="subtitle" style={{ color: 'black' }}>Contraseña</ThemedText>
        <form.Field
          name="password"
          validators={{ onChange: schema.shape.password }}
        >
          {(field) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="🔒"  
                secureTextEntry
                value={field.state.value}
                onChangeText={field.handleChange}
              />
              {field.state.meta.errors?.length > 0 && (
                <Text style={styles.errorText}>
                  {String(field.state.meta.errors[0]?.message || field.state.meta.errors[0])}
                </Text>
              )}
            </>
          )}
        </form.Field>
        <TouchableOpacity
        onPress={form.handleSubmit}
        disabled={!form.state.canSubmit}
        style={[
          styles.button,
          {
            backgroundColor: form.state.canSubmit ? '#007bff' : '#ccc',
          },
        ]}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  formContainer: {
    gap: 12,
    backgroundColor: 'white',
    padding: 24,
    margin: 20,
    borderRadius: 12,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },  
})
