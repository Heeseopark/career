import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { markIcons } from './lib/icons';

const text = z.string().min(1);

const resume = defineCollection({
  loader: glob({
    pattern: 'samil.yml',
    base: './src/content/resume',
  }),
  schema: z.object({
    name: text,
    role: text,
    email: text,
    phone: text,
    github: z.string().url(),
    githubLabel: text,
    description: text,
    introduce: z.array(text).min(1),
    projects: z
      .array(
        z.object({
          title: text,
          meta: text,
          icon: z.enum(markIcons).optional(),
          items: z.array(z.object({ lines: z.array(text).min(1) })).min(1),
        }),
      )
      .min(1),
    career: z
      .array(
        z.object({
          title: text,
          icon: z.enum(markIcons).optional(),
          badge: text.optional(),
          points: z
            .array(
              z.object({
                text: text,
                children: z.array(text).optional(),
              }),
            )
            .min(1),
        }),
      )
      .min(1),
    language: z.array(text).min(1),
    stack: z
      .array(
        z.object({
          label: text,
          value: text,
        }),
      )
      .min(1),
  }),
});

export const collections = { resume };
