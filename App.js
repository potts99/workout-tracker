import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

import { RootNavigator } from "./navigation/RootNavigator";
import { AuthenticatedUserProvider } from "./providers";

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
