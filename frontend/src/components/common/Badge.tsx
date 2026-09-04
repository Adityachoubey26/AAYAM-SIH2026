import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'success' | 'warning' | 'danger' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default Badge;
