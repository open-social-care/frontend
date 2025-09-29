import { z } from "zod";

const ChartDataSchema = z.union([
  z.record(z.string(), z.number()),
  z.array(z.string()),
]);

const DemographicAnalyticsSchema = z.object({
  genderDistribution: ChartDataSchema.optional(),
  ageDistribution: ChartDataSchema.optional(),
  householdSize: ChartDataSchema.optional(),
});

const SocioeconomicAnalyticsSchema = z.object({
  educationLevel: ChartDataSchema.optional(),
  employmentStatus: ChartDataSchema.optional(),
  incomeSources: ChartDataSchema.optional(),
});

const OperationalAnalyticsSchema = z.object({
  referrals: ChartDataSchema.optional(),
  topNeighborhoods: ChartDataSchema.optional(),
});

export const AnalyticsDataSchema = z.object({
  demographic: DemographicAnalyticsSchema,
  socioeconomic: SocioeconomicAnalyticsSchema,
  operational: OperationalAnalyticsSchema,
});

export type AnalyticsData = z.infer<typeof AnalyticsDataSchema>;