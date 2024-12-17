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
        <Text style={{marginBottom:"20px"}}>Foreign Worker Stream</Text>
          <Text style={{ marginBottom:'15px', textAlign:"center"}}>Your score report</Text>
         
          {Object.keys(answer).length === 0 ? (
            <Text>No answers selected yet.</Text>
              ) : (
                Object.entries(answer).map(([question, answer], index) => (
                  <View key={index} style={{ marginVertical: 5 , marginHorizontal: 7}}>
                    <View style={{display:"flex", flexDirection:'row', justifyContent:'space-between' }}>
                      <Text style={{ fontWeight: "bold" }}>{question}: </Text>
                      <Text style={{ fontWeight: "bold" }}>{answer} </Text>
                    </View>
                  </View>
                ))
              )
          }
          
            <View style={{ display: "flex", justifyContent: 'center', marginVertical: 5}}>
              {
                answer.languageKnowledge && (
                  <>
                    <Text style={{ fontWeight: "bold" }}>Language Skills</Text>
                    <View style={{display:"flex", flexDirection:'row', justifyContent:'space-between',marginVertical: 5, marginLeft:10}}>
                      <Text style={{ fontWeight: "bold" }}>Two Official language </Text>
                      <Text style={{ fontWeight: "bold" }}> {answer.languageKnowledge} </Text> 
                    </View>
                  </>
                )
              }

            </View>

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