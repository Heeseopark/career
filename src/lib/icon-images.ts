import type { ImageMetadata } from 'astro';
import allen from '../assets/icons/allen.png';
import handybus from '../assets/icons/handybus.png';
import korea from '../assets/icons/korea.png';
import megastudy from '../assets/icons/megastudy.png';
import mumul from '../assets/icons/mumul.png';
import sarang from '../assets/icons/sarang.png';
import type { ImageIconName } from './icons';

export const imageIcons: Record<ImageIconName, ImageMetadata> = {
  allen,
  mumul,
  sarang,
  handybus,
  megastudy,
  korea,
};
