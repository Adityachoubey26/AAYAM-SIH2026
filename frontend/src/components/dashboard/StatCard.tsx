import React from 'react';

export interface StatCardProps {
  label?: string;
  value?: string | number;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
};

export default StatCard;
