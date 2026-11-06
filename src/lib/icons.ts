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
  'book',
  'chat',
  'people',
  'bus',
  'qa',
  'clipboard',
  'cap',
] as const;

export type IconName = (typeof iconNames)[number];

export const markIcons = ['book', 'chat', 'people', 'bus', 'qa', 'clipboard', 'cap'] as const;

export type MarkIcon = (typeof markIcons)[number];
