import React from "react";
import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// Create styles
const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  categoryTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  subcategory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subcategoryText: {
    fontSize: 12,
  },
});

// Create Document Component
const PHDStreamPdf = ({ answer, totalScore }) => {
  console.log(answer);
  console.log({ totalScore });
  const { t } = useTranslation();
  return (
    <PDFViewer height="400px" width="100%">
      <Document>
        <Page size="A4">
          <View style={styles.section}>
            <Text style={{ marginBottom: "20px" }}>PHD Worker Stream</Text>
            <Text style={{ marginBottom: "15px", textAlign: "center" }}>
              Your score report
            </Text>

            {answer.map((question, id) => (
              <View key={id} style={{ marginBottom: "15px" }}>
                <Text style={{ fontWeight: "bold", marginBottom: "20px" }}>
                  {question.answer}
                </Text>
                {/*{Object.keys(answer[category]).map((subCategory) => (*/}
                {/*  <View key={subCategory} style={styles.subcategory}>*/}
                {/*    <Text style={{ marginLeft: "50px" }}>*/}
                {/*      {answer[category][subCategory].description}*/}
                {/*    </Text>*/}
                {/*    <Text style={{}}>*/}
                {/*      {answer[category][subCategory].score}*/}
                {/*    </Text>*/}
                {/*  </View>*/}
                {/*))}*/}
              </View>
            ))}

            <View style={{ marginBottom: "15px" }}>
              <Text style={{ fontWeight: "bold", marginBottom: "20px" }}>
                Total Score{" "}
              </Text>
              <View style={styles.subcategory}>
                <Text style={{ marginLeft: "50px" }}>Points earned</Text>
                <Text style={{}}>{totalScore}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

PHDStreamPdf.propsTypes = {
  answer: PropTypes.object.isRequired,
  totalScore: PropTypes.number.isRequired,
};

export default PHDStreamPdf;
