export const roleLevelMap = {
  PLAYER_PERMISSIONS: 0,
  ALL_PERMISSIONS: 1,
};

export type RoleLevel = keyof typeof roleLevelMap;
