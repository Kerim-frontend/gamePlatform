import * as React from 'react';
import { View, useWindowDimensions, SafeAreaView, SafeAreaViewComponent } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from './../../components/CustomHeader';
import Customer from './Customer';
import Performer from './Performer';

const renderScene = SceneMap({
  first: () => <Performer />,
  second: () => <Customer />
});


export default function Buttles({navigation}) {



  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Я исполнитель' },
    { key: 'second', title: 'Я заказчик' },
  ]);
  const layout = useWindowDimensions();
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#121B24'}}>
      <Header text="Мои сражения"/>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width, }}
        renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#121B24'}}/>}
      />
    </SafeAreaView>
  );
}