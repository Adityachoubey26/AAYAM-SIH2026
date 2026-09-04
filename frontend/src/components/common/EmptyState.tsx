import React from 'react';

export interface EmptyStateProps {
  title?: string;
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, description }) => {
  return (
    <div>
      <h3>{title || 'No data found'}</h3>
      <p>{description}</p>
    </div>
  );
};

export default EmptyState;
