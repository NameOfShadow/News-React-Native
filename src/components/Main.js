import { View, Text, FlatList, Modal, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'

export default function Main({ navigation }) {
  const [ListOfItems, setListOfItems] = useState([
    {text: "Чай ник для заваривания чая Emsa Cork изготовлен из высококачественного фарфора.", full_text: "Изделия из фарфора отличаются практичностью и высоким качеством исполнения. Чайник оснащен удобной ручкой. Изделие прекрасно подходит для заваривания вкусного и ароматного чая, а также травяных настоев. Благодаря изысканному дизайну чайник Emsa Cork будет прекрасно смотреться в интерьере любой кухни.", img_url: "https://cdnn21.img.ria.ru/images/07e5/09/0d/1749916059_171:0:2902:2048_1920x0_80_0_0_c48e7f0a56d2c7765463469bd038225b.jpg", key: "2"},
    {text: "Вода... Вода... Кто из нас не знает, что это такое.", full_text: "Для кого-то вода — это средство для мытья посуды, стирки белья, полива огорода, полива цветов. А для кого-то она — источник жизни. В нашем городе есть два водоема — река Сок и озеро с одноименным названием. Озеро Сок — это самая большая в городе система прудов. Она находится в лесном массиве, у подножия горы Машук. Когда-то давно, еще в конце девятнадцатого века, здесь была лесопилка.", img_url: "https://cdnn21.img.ria.ru/images/100398/13/1003981317_85:0:1856:1328_1920x0_80_0_0_1ee91d3703f257254577035f03aaf1cd.jpg", key: "3"},
    {text: "Молоко - это важный продукт в рационе любого человека, ведь оно богато белком и кальцием.", full_text: "Но не все люди знают, что молоко может быть вредным для здоровья. Давайте разберемся, в чем же заключается вред молока для человека. В молоке содержится много кальция, который необходим для поддержания здоровья костей. Однако, если в организме человека наблюдается недостаток витамина D, кальций не усваивается организмом.", img_url: "https://www.gastronom.ru/binfiles/images/20220506/b3139039.jpg", key: "4"}
  ]);
  const [modalWindow, setModalWindow] = useState(true);
  return (
      <View style={{padding: 20}}>
        <FlatList showsHorizontalScrollIndicator={false} scrollEnabled={true} data={ListOfItems} renderItem={({ item }) => ((
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Article", item)}>
          <View style={{borderWidth: 2, borderRadius: 6, borderColor: "white", backgroundColor: "#fafafa", padding: 20}}>
            <View>
              <Image source={{width: 240, height: 120, uri: item.img_url}}/>
            </View>
            <View style={{}}>
              <Text style={{fontSize: 20, textAlign: "left"}}>{item.text}</Text>
            </View>
          </View>
          </TouchableWithoutFeedback>
          ))} />
      </View>
  )
}