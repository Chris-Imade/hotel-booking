import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Modal, Spinner } from 'native-base';
import { colors } from '@components/styled';


const Loader = () => {
    const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal isOpen={modalVisible} onClose={setModalVisible} size={"xs"}>
        <Modal.Content style={{ width: 50, height: 50, backgroundColor: colors.partialBlack }}>
          <Modal.Body>
            <Spinner color="white" />
          </Modal.Body>
        </Modal.Content>
      </Modal>
  )
}

export default Loader

const styles = StyleSheet.create({})