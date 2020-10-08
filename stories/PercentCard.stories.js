import React from 'react';
import PercentCard from '../comps/PercentCard';

export default {
  title: 'Custom/MyPercentCard',
  component: PercentCard
};

export const BasicPercentCard = () => <PercentCard />;
export const SampleCard = () => <PercentCard numbertext={"23%"} Color="{#00C1CD}"/>


