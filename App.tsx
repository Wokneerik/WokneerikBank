import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import StoryContainer from './app/components/screens/home/StoryContainer';
import Navigation from './app/navigation/Navigation';
import { AuthProvider } from './app/providers/AuthProvider';
import { DataProvider } from './app/providers/DataProvider';

export default function App() {
  return <AuthProvider>
    <DataProvider>
    <StoryContainer />
    <Navigation />
    </DataProvider>
    <StatusBar style="dark" />
  </AuthProvider>
}


LogBox.ignoreAllLogs()