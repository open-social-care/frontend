import { z } from "zod";

const ChartDataSchema = z.union([
  z.record(z.string(), z.number()),
  z.array(z.string()),
]);

const CcgAnalyticsSchema = z.object({
  demographic: z.object({
    genderDistribution: ChartDataSchema.optional(),
    ageDistribution: ChartDataSchema.optional(),
    householdSize: ChartDataSchema.optional(),
  }),
  socioeconomic: z.object({
    educationLevel: ChartDataSchema.optional(),
    employmentStatus: ChartDataSchema.optional(),
    incomeSources: ChartDataSchema.optional(),
  }),
  operational: z.object({
    referrals: ChartDataSchema.optional(),
    topNeighborhoods: ChartDataSchema.optional(),
  }),
});

const AlbergueAnalyticsSchema = z.object({
  mobility_profile: z.object({
    recurrentVisitors: ChartDataSchema.optional(),
    topOriginCities: ChartDataSchema.optional(),
    genderDistribution: ChartDataSchema.optional(),
    raceDistribution: ChartDataSchema.optional(),
  }),
  health_profile: z.object({
    chronicDiseases: ChartDataSchema.optional(),
    substanceUse: ChartDataSchema.optional(),
    psychologicalConditions: ChartDataSchema.optional(),
    hasSoughtTreatment: ChartDataSchema.optional(),
    usesMedication: ChartDataSchema.optional(),
    receivesFollowUp: ChartDataSchema.optional(),
  }),
  socioeconomic_profile: z.object({
    hasCadUnico: ChartDataSchema.optional(),
    socialBenefits: ChartDataSchema.optional(),
    pensionBenefits: ChartDataSchema.optional(),
    documentation: z.object({ // Sub-categoria
      hasRG: ChartDataSchema.optional(),
      hasCPF: ChartDataSchema.optional(),
      hasWorkCard: ChartDataSchema.optional(),
    }).optional(),
  }),
});


export const AnalyticsDataSchema = z.union([
  CcgAnalyticsSchema,
  AlbergueAnalyticsSchema,
]);

export type AnalyticsData = z.infer<typeof AnalyticsDataSchema>;

export type CcgAnalyticsData = z.infer<typeof CcgAnalyticsSchema>;
export type AlbergueAnalyticsData = z.infer<typeof AlbergueAnalyticsSchema>;