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
  'qa',
  'clipboard',
  'cap',
] as const;

export type IconName = (typeof iconNames)[number];

/** PNG keys in src/assets/icons, plus stroke icons still used on career rows. */
export const imageIconNames = ['allen', 'mumul', 'sarang', 'handybus'] as const;

export type ImageIconName = (typeof imageIconNames)[number];

export const strokeMarkIcons = ['qa', 'clipboard', 'cap'] as const;

export type StrokeMarkIcon = (typeof strokeMarkIcons)[number];

export const markIcons = [...imageIconNames, ...strokeMarkIcons] as const;

export type MarkIcon = (typeof markIcons)[number];

export function isImageIcon(name: MarkIcon): name is ImageIconName {
  return (imageIconNames as readonly string[]).includes(name);
}
