import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const WebChart = ({ data, width, height, title }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  const generatePath = () => {
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * (width - 40);
      const y = height - 40 - ((value - minValue) / range) * (height - 80);
      return `${x},${y}`;
    }).join(' L');
    
    return `M${points}`;
  };

  return (
    <View style={[styles.container, { width, height }]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.chartContainer}>
        <svg width={width - 40} height={height - 40} style={styles.svg}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={COLORS.accent} stopOpacity="1" />
              <stop offset="100%" stopColor={COLORS.primary} stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d={generatePath()}
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {data.map((value, index) => {
            const x = (index / (data.length - 1)) * (width - 40);
            const y = height - 40 - ((value - minValue) / range) * (height - 80);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill={COLORS.accent}
              />
            );
          })}
        </svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontSize: 16,
    color: COLORS.text.secondary,
    marginBottom: 15,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    borderRadius: 8,
  },
});

export default WebChart;