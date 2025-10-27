import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, GRADIENTS } from '../constants/colors';

const CampaignsScreen = () => {
  const [activeTab, setActiveTab] = useState('Campaigns');

  const campaigns = [
    {
      id: 1,
      title: 'Summer Menu Promotion',
      description: 'Advertise our new summer menu',
      category: 'Food',
      type: 'Promotion',
    },
    {
      id: 2,
      title: 'Game Launch Partnership',
      description: 'Promote our upcoming game',
      category: 'Gaming',
      type: 'Partnership',
    },
  ];

  const tabs = ['Campaigns', 'Applied'];

  const renderCampaignCard = (campaign) => (
    <View key={campaign.id} style={styles.campaignCard}>
      <View style={styles.campaignHeader}>
        <Text style={styles.campaignTitle}>{campaign.title}</Text>
        <Text style={styles.campaignType}>{campaign.type}</Text>
      </View>
      
      <Text style={styles.campaignDescription}>{campaign.description}</Text>
      
      <TouchableOpacity style={styles.applyButton}>
        <LinearGradient
          colors={GRADIENTS.primary}
          style={styles.applyButtonGradient}
        >
          <Text style={styles.applyButtonText}>Apply</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Campaigns</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'Campaigns' ? (
          <>
            {campaigns.map(renderCampaignCard)}
          </>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="document-outline" size={64} color={COLORS.text.light} />
            <Text style={styles.emptyStateText}>No applied campaigns yet</Text>
            <Text style={styles.emptyStateSubtext}>
              Browse campaigns and apply to start earning
            </Text>
          </View>
        )}
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 15,
    borderRadius: 20,
    backgroundColor: COLORS.gray[100],
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontSize: 16,
    color: COLORS.text.secondary,
    fontWeight: '500',
  },
  activeTabText: {
    color: COLORS.white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  campaignCard: {
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
  campaignHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  campaignTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    flex: 1,
    marginRight: 10,
  },
  campaignType: {
    fontSize: 12,
    color: COLORS.primary,
    backgroundColor: COLORS.primary + '20',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontWeight: '500',
  },
  campaignDescription: {
    fontSize: 16,
    color: COLORS.text.secondary,
    marginBottom: 20,
    lineHeight: 22,
  },
  applyButton: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  applyButtonGradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text.secondary,
    marginTop: 20,
    marginBottom: 10,
  },
  emptyStateSubtext: {
    fontSize: 16,
    color: COLORS.text.light,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default CampaignsScreen;