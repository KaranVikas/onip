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
const ForeignWorkerStreamPdf = ({answer}) => {
  console.log(answer)
  const { t } = useTranslation();
  return (
  <PDFViewer height='100%' width='100%'>
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          <Text>Your score report</Text>
          {Object.keys(answer).length === 0 ? (
        <Text>No answers selected yet.</Text>
          ) : (
            Object.entries(answer).map(([question, answer], index) => (
              <View key={index} style={{ marginVertical: 5 }}>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>{question}: </Text>
                  {answer}
                </Text>
              </View>
            ))
          )}
        </View>
        {/* <View style={styles.section}>
          <Text>{t('foreign_worker_stream')}</Text>
        </View>
        <View style={styles.section}>
          <Text>{t('Education')}: {name}</Text>
        </View>
        <View style={styles.section}>
          <Text>{t('Language Skills')}: {age}</Text>
        </View>
        <View style={styles.section}>
          <Text>{t('Work Experience')}: {age}</Text>
        </View> */}
      </Page>
    </Document>
  </PDFViewer>
)};

ForeignWorkerStreamPdf.propsTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default ForeignWorkerStreamPdf;