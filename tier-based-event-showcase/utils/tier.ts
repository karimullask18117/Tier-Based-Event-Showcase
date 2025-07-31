export const tierOrder = ['free', 'silver', 'gold', 'platinum'];
export function getAllowedTiers(userTier: string) {
  const idx = tierOrder.indexOf(userTier);
  return tierOrder.slice(0, idx + 1);
}
