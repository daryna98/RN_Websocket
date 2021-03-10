import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  header: {
    fontSize: 60,
    color: 'lightblue',
    paddingBottom: 50,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 26,
    paddingBottom: 80,
    textAlign: 'center',
  },
  actionText: {
    fontSize: 16,
    color: 'grey',
    paddingBottom: 40,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  button: {
    width: 200,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'lightblue',
  },
  buttonText: {
    fontSize: 16,
  },
});
