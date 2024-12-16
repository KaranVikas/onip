import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Create styles
const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const ForeignWorkerStreamPdf = ({ name, age }) => {
  
  const { t } = useTranslation();
  return (
  <PDFViewer height='100%' width='100%'>
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          <Text>{t('foreign_worker_stream')}</Text>
        </View>
        <View style={styles.section}>
          <Text>{t('name')}: {name}</Text>
        </View>
        <View style={styles.section}>
          <Text>{t('age')}: {age}</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
)};

ForeignWorkerStreamPdf.propsTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default ForeignWorkerStreamPdf;