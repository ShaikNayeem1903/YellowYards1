import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import Svg, { Circle } from 'react-native-svg';

import Feather from 'react-native-vector-icons/Feather';
import { StatusBar } from 'react-native';


const screenWidth = Dimensions.get('window').width;

const EMICalculator = ({ navigation }: any) => {

  const [loanAmount, setLoanAmount] = useState(150000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(5);

  const emiData = useMemo(() => {

    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmount = emi * months;
    const totalInterest = totalAmount - loanAmount;

    return {

      
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
    };

  }, [loanAmount, interestRate, tenure]);

  const chartData = [
    {
      name: 'Principal',
      amount: loanAmount,
      color: '#2E3A59',
      legendFontColor: '#000',
      legendFontSize: 12,
    },
    {
      name: 'Interest',
      amount: emiData.totalInterest,
      color: '#F5A623',
      legendFontColor: '#000',
      legendFontSize: 12,
    },
  ];

  const radius = 80;
const strokeWidth = 30;
const circumference = 2 * Math.PI * radius;

const total = loanAmount + emiData.totalInterest;

const principalPercentage = loanAmount / total;
const interestPercentage = emiData.totalInterest / total;

const principalStroke = circumference * principalPercentage;
const interestStroke = circumference * interestPercentage;


  return (
  <>
    <StatusBar
      backgroundColor="#E6D5B8"
      barStyle="dark-content"
    />

    <SafeAreaView style={{ flex: 1, backgroundColor: '#E6D5B8' }}>
      {/* BODY BACKGROUND */}
      <View style={{ flex: 1, backgroundColor: '#F9F9F4' }}>
        
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >

          {/* HEADER */}
          <View style={styles.topHeader}>
            <View style={styles.profileRow}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.profileName}>
                  Ronald Richards
                </Text>
                <Text style={styles.profileEmail}>
                  bill.sanders@azuretile.com
                </Text>
              </View>
            </View>

            <View style={styles.bellWrapper}>
              <Feather name="bell" size={24} color="#000" />
              <View style={styles.notificationDot}>
                <Text style={styles.notificationText}>2</Text>
              </View>
            </View>
          </View>

          {/* CIBIL CARD */}
          <TouchableOpacity style={styles.cibilCard}>
            <Feather name="activity" size={35} color="#F5A623" />
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.cibilTitle}>
                Check Your Cibil Score
              </Text>
              <Text style={styles.cibilDesc}>
                Check your CIBIL score instantly to understand your credit health and boost loan approval chances.
              </Text>
            </View>
          </TouchableOpacity>

          {/* EMI TITLE */}
          <Text style={styles.emiHeading}>EMI Calculator</Text>
          <Text style={styles.sectionDesc}>
            Calculate your EMI easily to understand your monthly payments and choose the right loan plan with confidence.
          </Text>
        {/* LOAN AMOUNT */}
        <View style={styles.sliderSection}>
          <View style={styles.sliderHeader}>
            <Text style={styles.sliderLabel}>Loan Amount</Text>
            <View style={styles.valueBox}>
              <Text style={styles.sliderValue}>
                ₹ {loanAmount.toLocaleString()}
              </Text>
            </View>
          </View>

          <Slider
            minimumValue={50000}
            maximumValue={2000000}
            step={10000}
            value={loanAmount}
            onValueChange={setLoanAmount}
            minimumTrackTintColor="#2E3A59"
            maximumTrackTintColor="#E5E5E5"
            thumbTintColor="#2E3A59"
          />
        </View>

        {/* INTEREST */}
        <View style={styles.sliderSection}>
          <View style={styles.sliderHeader}>
            <Text style={styles.sliderLabel}>
              Interest Rate (Per Annual)
            </Text>
            <View style={styles.valueBox}>
              <Text style={styles.sliderValue}>
                {interestRate.toFixed(1)}%
              </Text>
            </View>
          </View>

          <Slider
            minimumValue={5}
            maximumValue={20}
            step={0.1}
            value={interestRate}
            onValueChange={setInterestRate}
            minimumTrackTintColor="#2E3A59"
            maximumTrackTintColor="#E5E5E5"
            thumbTintColor="#2E3A59"
          />
        </View>

        {/* TENURE */}
        <View style={styles.sliderSection}>
          <View style={styles.sliderHeader}>
            <Text style={styles.sliderLabel}>Loan Tenure</Text>
            <View style={styles.valueBox}>
              <Text style={styles.sliderValue}>
                {tenure} Yr
              </Text>
            </View>
          </View>

          <Slider
            minimumValue={1}
            maximumValue={30}
            step={1}
            value={tenure}
            onValueChange={setTenure}
            minimumTrackTintColor="#2E3A59"
            maximumTrackTintColor="#E5E5E5"
            thumbTintColor="#2E3A59"
          />
        </View>
{/* DONUT CHART */}
<View style={styles.chartWrapper}>

  <View style={styles.donutContainer}>
    <Svg width={220} height={220}>

      {/* Background Circle */}
      <Circle
        cx="110"
        cy="110"
        r="80"
        stroke="#EAEAEA"
        strokeWidth="30"
        fill="none"
      />

      {/* Principal */}
      <Circle
        cx="110"
        cy="110"
        r="80"
        stroke="#2E2E4F"
        strokeWidth="30"
        fill="none"
        strokeDasharray={`${principalStroke} ${circumference}`}
        strokeLinecap="round"
        rotation="-90"
        origin="110,110"
      />

      {/* Interest */}
      <Circle
        cx="110"
        cy="110"
        r="80"
        stroke="#F5A623"
        strokeWidth="30"
        fill="none"
        strokeDasharray={`${interestStroke} ${circumference}`}
        strokeDashoffset={-principalStroke}
        strokeLinecap="round"
        rotation="-90"
        origin="110,110"
      />

    </Svg>
  </View>

  {/* LEGEND */}
  <View style={styles.legendRow}>
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: '#2E2E4F' }]} />
      <Text style={styles.legendText}>Principal Amount</Text>
    </View>

    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: '#F5A623' }]} />
      <Text style={styles.legendText}>Interest</Text>
    </View>
  </View>

</View>



        {/* EMI DETAILS */}
        <View style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>EMI Details</Text>

          <View style={styles.row}>
            <Text>Monthly EMI</Text>
            <Text>₹ {emiData.emi.toLocaleString()}</Text>
          </View>

          <View style={styles.row}>
            <Text>Principal Amount</Text>
            <Text>₹ {loanAmount.toLocaleString()}</Text>
          </View>

          <View style={styles.row}>
            <Text>Total Interest</Text>
            <Text>₹ {emiData.totalInterest.toLocaleString()}</Text>
          </View>

          <View style={styles.row}>
            <Text>Total Amount</Text>
            <Text>₹ {emiData.totalAmount.toLocaleString()}</Text>
          </View>
        </View>

    
        </ScrollView>

      </View>
    </SafeAreaView>
  </>
);
 
};



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F9F9F4',
    paddingHorizontal: 20,
  },

  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 10,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },

  profileEmail: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },

  bellWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  notificationDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
  },

  notificationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },


  cibilCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 18,
    marginBottom: 25,
    alignItems: 'center',
    elevation: 2,
  },

  cibilTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },

  cibilDesc: {
    fontSize: 13,
    color: '#777',
    lineHeight: 18,
  },



  emiHeading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: '#000',
  },

  sectionDesc: {
    fontSize: 13,
    color: '#777',
    marginBottom: 25,
    lineHeight: 18,
  },



  sliderSection: {
    marginBottom: 25,
  },

  sliderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  sliderLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

  valueBox: {
    backgroundColor: '#F4F2E9',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  sliderValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  },


  legendContainer: {
    marginTop: 15,
    alignItems: 'center',
  },



  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },

  detailsCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    marginTop: 25,
    marginBottom: 40,
    elevation: 2,
  },

  detailsTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },


chartCircle: {
  width: 240,
  height: 240,
  borderRadius: 120,
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
},

chartWrapper: {
  alignItems: 'center',
  marginTop: 30,
},

donutContainer: {
  width: 240,
  height: 240,
  borderRadius: 120,
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 6,
},

legendRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
},

legendItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: 20,
},

legendDot: {
  width: 14,
  height: 14,
  borderRadius: 7,
  marginRight: 8,
},

legendText: {
  fontSize: 14,
  fontWeight: '500',
},


});


export default EMICalculator;
