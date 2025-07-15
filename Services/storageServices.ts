import AsyncStorage from "@react-native-async-storage/async-storage"

export const setStorage = async (key: string, value: string | object | boolean) => {
  if (typeof value !== "string") {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return
  }
  await AsyncStorage.setItem(key, value)
}

export const getStorage = async (search: string) => {
  const data = await AsyncStorage.getItem(search)
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

export const removeStorage = async (search: string) => {
  await AsyncStorage.removeItem(search)
}
