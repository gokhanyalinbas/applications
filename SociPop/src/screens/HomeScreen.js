import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, GRADIENTS } from '../constants/colors';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const chartData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        data: [850, 890, 920, 940, 950, 937.4],
        color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
        strokeWidth: 3,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 1,
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={GRADIENTS.primary}
        style={styles.header}
      >
        <Text style={styles.appTitle}>SociPop</Text>
      </LinearGradient>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Subscribers Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Subscribers</Text>
          <Text style={styles.mainNumber}>12 K</Text>
          
          <View style={styles.trendContainer}>
            <Ionicons name="trending-up" size={16} color={COLORS.secondary} />
            <Text style={styles.trendText}>8%</Text>
          </View>
        </View>

        {/* PopScore Circle */}
        <View style={styles.popScoreContainer}>
          <View style={styles.popScoreCircle}>
            <LinearGradient
              colors={GRADIENTS.secondary}
              style={styles.popScoreGradient}
            >
              <Text style={styles.popScoreLabel}>PopScore</Text>
              <Text style={styles.popScoreValue}>937,4</Text>
            </LinearGradient>
          </View>
        </View>

        {/* Views Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Views</Text>
          <Text style={styles.mainNumber}>950,3</Text>
        </View>

        {/* 30 Day Chart */}
        <View style={styles.chartSection}>
          <Text style={styles.chartTitle}>30 day Vilg</Text>
          <View style={styles.chartContainer}>
            <LineChart
              data={chartData}
              width={width - 60}
              height={120}
              chartConfig={chartConfig}
              bezier
              style={styles.chart}
              withDots={false}
              withInnerLines={false}
              withOuterLines={false}
              withVerticalLabels={false}
              withHorizontalLabels={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionLabel: {
    fontSize: 16,
    color: COLORS.text.secondary,
    marginBottom: 10,
  },
  mainNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 10,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendText: {
    fontSize: 16,
    color: COLORS.secondary,
    marginLeft: 5,
    fontWeight: '600',
  },
  popScoreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  popScoreCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popScoreGradient: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  popScoreLabel: {
    fontSize: 18,
    color: COLORS.white,
    marginBottom: 5,
  },
  popScoreValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  chartSection: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 16,
    color: COLORS.text.secondary,
    marginBottom: 15,
  },
  chartContainer: {
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default HomeScreen;