import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, GRADIENTS } from '../constants/colors';
import SimpleChart from '../components/SimpleChart';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const chartData = [900, 920, 935, 940, 938, 942, 937.4];

  const socialAccounts = [
    {
      id: 1,
      name: 'YouTube',
      icon: 'logo-youtube',
      color: COLORS.social.youtube,
      connected: true,
    },
    {
      id: 2,
      name: 'Instagram',
      icon: 'logo-instagram',
      color: COLORS.social.instagram,
      connected: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Social Media Accounts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connected Accounts</Text>
          {socialAccounts.map((account) => (
            <View key={account.id} style={styles.socialAccount}>
              <View style={styles.socialAccountLeft}>
                <View style={[styles.socialIcon, { backgroundColor: account.color }]}>
                  <Ionicons name={account.icon} size={24} color={COLORS.white} />
                </View>
                <Text style={styles.socialAccountName}>{account.name}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-down" size={20} color={COLORS.text.light} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* PopScore Card */}
        <View style={styles.popScoreCard}>
          <View style={styles.popScoreHeader}>
            <Text style={styles.popScoreTitle}>PopS74</Text>
            <Text style={styles.popScoreSubtitle}>PopScore</Text>
          </View>
          
          <View style={styles.popScoreContainer}>
            <LinearGradient
              colors={GRADIENTS.secondary}
              style={styles.popScoreCircle}
            >
              <Text style={styles.popScoreValue}>937,4</Text>
            </LinearGradient>
          </View>
        </View>

        {/* PopScore History Chart */}
        <View style={styles.chartSection}>
          <Text style={styles.chartTitle}>PopScore History</Text>
          <View style={styles.chartContainer}>
            <SimpleChart
              data={chartData}
              width={width - 60}
              height={200}
              style={styles.chart}
            />
          </View>
        </View>

        {/* Account Actions */}
        <View style={styles.actionsSection}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={[styles.actionButtonText, { color: COLORS.accent }]}>
              Link Account
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={[styles.actionButtonText, { color: COLORS.social.youtube }]}>
              Remove
            </Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  logoutButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  logoutText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 15,
  },
  socialAccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[100],
  },
  socialAccountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  socialAccountName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.primary,
  },
  popScoreCard: {
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
  popScoreHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  popScoreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 5,
  },
  popScoreSubtitle: {
    fontSize: 16,
    color: COLORS.text.secondary,
  },
  popScoreContainer: {
    alignItems: 'center',
  },
  popScoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
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
  popScoreValue: {
    fontSize: 24,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 15,
  },
  chartContainer: {
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  actionsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 5,
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
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;