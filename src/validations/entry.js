import { z } from "zod";
const emptyStringToNull = z.preprocess((v) => v === "" ? null : v, z.string().nullable());
const emptyStringToUndefined = z.preprocess((v) => v === "" ? undefined : v, z.string().optional().nullable());
export const EntryCreateSchema = z.object({
    title: z.string().min(1, "Title is required"),
    type: z.enum(["MOVIE", "TV_SHOW"]),
    director: emptyStringToUndefined,
    budget: z.preprocess((v) => v === "" || v === null ? null : Number(v), z.number().positive().nullable().optional()),
    location: emptyStringToUndefined,
    duration: z.preprocess((v) => v === "" || v === null ? null : Number(v), z.number().int().positive().nullable().optional()),
    yearTime: emptyStringToUndefined,
    notes: emptyStringToUndefined,
    posterUrl: z.preprocess((v) => v === "" ? null : v, z.string().url().nullable().optional()),
});
export const EntryUpdateSchema = EntryCreateSchema.partial().extend({
    id: z.number().int().positive()
});
//# sourceMappingURL=entry.js.map