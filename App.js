import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SplashScreen} from "./assets/SplashScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {OnboardingScreen} from "./src/OnboardingScreen";
import {LoginScreen} from "./src/LoginScreen";
import {SignupScreen} from "./src/SignupScreen";
import {TabsScreen} from "./src/TabsScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MenuScreen} from "./src/MenuScreen";
import {DepositScreen} from "./src/DepositScreen";
import {WithdrawsScreen} from "./src/WithdrawsScreen";
import {NewAccountScreen} from "./src/NewAccountScreen";
import {ImportAccountScreen} from "./src/ImportAccountScreen";
import {ViewProfileScreen} from "./src/ViewProfileScreen";
import {MyAddressScreen} from "./src/MyAddressScreen";
import {AboutUsScreen} from "./src/AboutUsScreen";
import {SendCoinScreen} from "./src/SendCoinScreen";
import {ScanItemScreen} from "./src/ScanItemScreen";
import {PinScreen} from "./src/PinScreen";
import {WalletScreen} from "./src/WalletScreen";
import {ViewDetailsScreen} from "./src/ViewDetailsScreen";
import {SearchScreen} from "./src/SearchScreen";
import {DepositDetailsScreen} from "./src/DepositDetailsScreen";
import {SearchForDepositScreen} from "./src/SearchForDepositScreen";
import {TradeScreen} from "./src/TradeScreen";
import {WalletDepositScreen} from "./src/WalletDepositScreen";
import {SearchForWithdrawScreen} from "./src/SearchForWithdrawScreen";
import {ForgotPasswordScreen} from "./src/ForgotPasswordScreen";

export default function App() {

  const navOptionHandler = () => ({
    headerShown: false,
  })

  const Stack = createNativeStackNavigator();
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });
  if (isLoading) {
    return <SplashScreen/>;
  }
  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={navOptionHandler} name="Pin" component={PinScreen} />
          <Stack.Screen options={navOptionHandler}  name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen options={navOptionHandler}  name="Login" component={LoginScreen} />
          <Stack.Screen options={navOptionHandler}  name="Signup" component={SignupScreen}/>
          <Stack.Screen options={navOptionHandler}  name="ForgotPassword" component={ForgotPasswordScreen}/>
          <Stack.Screen options={navOptionHandler} name="Tabs" component={TabsScreen} />
          <Stack.Screen options={navOptionHandler} name="Menu" component={MenuScreen} />
          <Stack.Screen options={navOptionHandler} name="Deposit" component={DepositScreen} />
          <Stack.Screen options={navOptionHandler} name="Withdraw" component={WithdrawsScreen} />
          <Stack.Screen options={navOptionHandler} name="NewAccount" component={NewAccountScreen} />
          <Stack.Screen options={navOptionHandler} name="ImportAccount" component={ImportAccountScreen} />
          <Stack.Screen options={navOptionHandler} name="ViewProfile" component={ViewProfileScreen} />
          <Stack.Screen options={navOptionHandler} name="MyAddress" component={MyAddressScreen} />
          <Stack.Screen options={navOptionHandler} name="AboutUs" component={AboutUsScreen} />
          <Stack.Screen options={navOptionHandler} name="SendCoin" component={SendCoinScreen} />
          <Stack.Screen options={navOptionHandler} name="ScanItem" component={ScanItemScreen} />
          <Stack.Screen options={navOptionHandler} name="Wallet" component={WalletScreen} />
          <Stack.Screen options={navOptionHandler} name="Details" component={ViewDetailsScreen} />
          <Stack.Screen options={navOptionHandler} name="Search" component={SearchScreen} />
          <Stack.Screen options={navOptionHandler} name="DepositDetails" component={DepositDetailsScreen} />
          <Stack.Screen options={navOptionHandler} name="SearchForDeposit" component={SearchForDepositScreen} />
          <Stack.Screen options={navOptionHandler} name="SearchForWithdraw" component={SearchForWithdrawScreen} />
          <Stack.Screen options={navOptionHandler} name="Trade" component={TradeScreen} />
          <Stack.Screen options={navOptionHandler} name="WalletDeposit" component={WalletDepositScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
