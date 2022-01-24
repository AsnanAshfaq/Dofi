import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState} from 'react';
import Header from '../../Components/Header';
import Colors from '../../Constants/Colors';
import {Height, Width} from '../../Constants/Size';
import ImageCard from '../../Components/ImageCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import DeleteModal from '../../Modals/DeleteModal';

const Data = [
  'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
  'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB-LNm-0OOD5g1FEXFqDsLgSZEGuaWJA8zw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB-LNm-0OOD5g1FEXFqDsLgSZEGuaWJA8zw&usqp=CAU',
  'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
];
const Images: FC = () => {
  const [modal, setmodal] = useState(false);

  const uploadImage = () => {};
  const openCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
      },
      res => {
        console.log('Respnose is', res);
      },
    );
  };

  const openGallery = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      res => {
        console.log('Response is', res);
      },
    );
  };

  const handleDelete = () => {
    setmodal(true);
  };
  return (
    <View style={[styles.parent]}>
      <Header label="Images" />

      <DeleteModal isShow={modal} toggleModal={() => setmodal(false)} />

      <FlatList
        data={Data}
        style={{marginTop: Height * 0.03}}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => (
          <ImageCard src={item} handleDelete={handleDelete} />
        )}
        contentContainerStyle={styles.center}
      />

      {/* icon container  */}
      <View style={styles.iconContainer}>
        <View
          style={[
            {
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderRightColor: Colors.WHITE,
              borderRightWidth: 2,
              borderRadius: 2,
            },
          ]}>
          <TouchableOpacity onPress={openGallery} activeOpacity={0.5}>
            <Ionicons
              name="images"
              size={Width * 0.07 * 0.9}
              color={Colors.WHITE}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            {flex: 1},
            {alignItems: 'flex-end', justifyContent: 'center'},
          ]}>
          <TouchableOpacity onPress={openCamera} activeOpacity={0.5}>
            <Ionicons
              name="camera"
              size={Width * 0.07 * 0.9}
              color={Colors.WHITE}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: Width * 0.04,
    marginTop: Platform.OS === 'android' ? 10 : 5,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    backgroundColor: Colors.PURPLE,
    // minWidth: Width * 0.09,
    width: Width * 0.3,
    height: Width * 0.16,
    padding: 10,
    bottom: 10,
    right: -7,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
});
