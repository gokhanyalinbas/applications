import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../constants/colors';

const SimpleChart = ({ data, width, height, style }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;

  return (
    <View style={[styles.container, style, { width, height }]}>
      <View style={styles.chartArea}>
        {data.map((value, index) => {
          const pointHeight = ((value - minValue) / range) * (height - 40);
          const pointX = (index / (data.length - 1)) * (width - 40);
          
          return (
            <View
              key={index}
              style={[
                styles.point,
                {
                  left: pointX,
                  bottom: pointHeight + 20,
                }
              ]}
            />
          );
        })}
        
        {/* Connecting line simulation with multiple small bars */}
        {data.map((value, index) => {
          if (index === data.length - 1) return null;
          
          const currentY = ((value - minValue) / range) * (height - 40);
          const nextY = ((data[index + 1] - minValue) / range) * (height - 40);
          const currentX = (index / (data.length - 1)) * (width - 40);
          const nextX = ((index + 1) / (data.length - 1)) * (width - 40);
          
          const lineWidth = nextX - currentX;
          const lineHeight = Math.abs(nextY - currentY);
          
          return (
            <View
              key={`line-${index}`}
              style={[
                styles.line,
                {
                  left: currentX,
                  bottom: Math.min(currentY, nextY) + 20,
                  width: lineWidth,
                  height: Math.max(lineHeight, 2),
                  transform: [
                    { 
                      rotate: `${Math.atan2(nextY - currentY, lineWidth) * 180 / Math.PI}deg` 
                    }
                  ]
                }
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
  chartArea: {
    flex: 1,
    position: 'relative',
    margin: 20,
  },
  point: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
    marginLeft: -4,
    marginBottom: -4,
    ...Platform.select({
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      }
    })
  },
  line: {
    position: 'absolute',
    backgroundColor: COLORS.accent,
    height: 2,
    opacity: 0.8,
  },
});

export default SimpleChart;