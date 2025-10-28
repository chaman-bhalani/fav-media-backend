import { z } from "zod";
export declare const EntryCreateSchema: z.ZodObject<{
    title: z.ZodString;
    type: z.ZodEnum<["MOVIE", "TV_SHOW"]>;
    director: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, unknown>;
    budget: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodNumber>>, number | null | undefined, unknown>;
    location: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, unknown>;
    duration: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodNumber>>, number | null | undefined, unknown>;
    yearTime: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, unknown>;
    notes: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, unknown>;
    posterUrl: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    type: "MOVIE" | "TV_SHOW";
    title: string;
    director?: string | null | undefined;
    budget?: number | null | undefined;
    location?: string | null | undefined;
    duration?: number | null | undefined;
    yearTime?: string | null | undefined;
    notes?: string | null | undefined;
    posterUrl?: string | null | undefined;
}, {
    type: "MOVIE" | "TV_SHOW";
    title: string;
    director?: unknown;
    budget?: unknown;
    location?: unknown;
    duration?: unknown;
    yearTime?: unknown;
    notes?: unknown;
    posterUrl?: unknown;
}>;
export declare const EntryUpdateSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<["MOVIE", "TV_SHOW"]>>;
    director: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, unknown>>;
    budget: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodNumber>>, number | null | undefined, unknown>>;
    location: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, unknown>>;
    duration: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodNumber>>, number | null | undefined, unknown>>;
    yearTime: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, unknown>>;
    notes: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, unknown>>;
    posterUrl: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, unknown>>;
} & {
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    type?: "MOVIE" | "TV_SHOW" | undefined;
    title?: string | undefined;
    director?: string | null | undefined;
    budget?: number | null | undefined;
    location?: string | null | undefined;
    duration?: number | null | undefined;
    yearTime?: string | null | undefined;
    notes?: string | null | undefined;
    posterUrl?: string | null | undefined;
}, {
    id: number;
    type?: "MOVIE" | "TV_SHOW" | undefined;
    title?: string | undefined;
    director?: unknown;
    budget?: unknown;
    location?: unknown;
    duration?: unknown;
    yearTime?: unknown;
    notes?: unknown;
    posterUrl?: unknown;
}>;
//# sourceMappingURL=entry.d.ts.map