export const iconNames = [
  'mail',
  'phone',
  'github',
  'introduce',
  'projects',
  'career',
  'language',
  'stack',
  'agent',
  'backend',
  'data',
] as const;

export type IconName = (typeof iconNames)[number];

/** PNG keys in src/assets/icons. */
export const imageIconNames = [
  'allen',
  'mumul',
  'sarang',
  'handybus',
  'megastudy',
  'korea',
] as const;

export type ImageIconName = (typeof imageIconNames)[number];

export const markIcons = imageIconNames;

export type MarkIcon = ImageIconName;
