'use server';
/**
 * @fileOverview An AI agent that provides personalized tea recommendations based on mood, food, or time of day.
 *
 * - aiTeaSuggestion - A function that handles the tea recommendation process.
 * - AITeaSuggestionInput - The input type for the aiTeaSuggestion function.
 * - AITeaSuggestionOutput - The return type for the aiTeaSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AITeaSuggestionInputSchema = z.object({
  mood: z
    .string()
    .optional()
    .describe('The user\u0027s current mood or desired feeling.'),
  foodChoices: z
    .string()
    .optional()
    .describe('Food the user is eating or planning to eat.'),
  timeOfDay: z
    .string()
    .optional()
    .describe('The current time of day (e.g., morning, afternoon, evening).'),
});
export type AITeaSuggestionInput = z.infer<typeof AITeaSuggestionInputSchema>;

const AITeaSuggestionOutputSchema = z.object({
  recommendation: z
    .string()
    .describe(
      'A personalized tea recommendation along with a brief explanation of why it was chosen.'
    ),
});
export type AITeaSuggestionOutput = z.infer<
  typeof AITeaSuggestionOutputSchema
>;

export async function aiTeaSuggestion(
  input: AITeaSuggestionInput
): Promise<AITeaSuggestionOutput> {
  return aiTeaSuggestionFlow(input);
}

const aiTeaSuggestionPrompt = ai.definePrompt({
  name: 'aiTeaSuggestionPrompt',
  input: {schema: AITeaSuggestionInputSchema},
  output: {schema: AITeaSuggestionOutputSchema},
  prompt: `You are an expert tea sommelier, renowned for your ability to match the perfect tea to any situation.
Based on the following information, please provide a personalized tea recommendation.
Explain why you chose this tea and how it enhances the user's experience.

{{#if mood}}
Current mood: {{{mood}}}
{{/if}}

{{#if foodChoices}}
Food choices: {{{foodChoices}}}
{{/if}}

{{#if timeOfDay}}
Time of day: {{{timeOfDay}}}
{{/if}}

Please provide a detailed recommendation in the 'recommendation' field of the JSON output.`,
});

const aiTeaSuggestionFlow = ai.defineFlow(
  {
    name: 'aiTeaSuggestionFlow',
    inputSchema: AITeaSuggestionInputSchema,
    outputSchema: AITeaSuggestionOutputSchema,
  },
  async input => {
    const {output} = await aiTeaSuggestionPrompt(input);
    return output!;
  }
);
