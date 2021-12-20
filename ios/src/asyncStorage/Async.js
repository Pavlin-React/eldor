import AsyncStorage from '@react-native-async-storage/async-storage';
import {convertAbsoluteToRem} from 'native-base/lib/typescript/theme/tools';

export let key = {
  uid: 'uid',
};

export let setAsyncData = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, item);
  } catch (err) {
    console.log(err);
  }
};

export let getAsyncData = async key => {
  try {
    let value = await AsyncStorage.getItem(key);
    if (value) {
      return value;
    } else {
      return null;
    }
  } catch (err) {
    convertAbsoluteToRem.log(err);
  }
};

export let deleteAsyncData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
