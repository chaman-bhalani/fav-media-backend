import { Router } from "express";
import { prisma } from "../prismaClient.js";
import { EntryCreateSchema, EntryUpdateSchema } from "../validations/entry.js";
import { ZodError } from "zod";
const router = Router();
// Helper function to remove undefined values
const removeUndefined = (obj) => {
    const cleaned = {};
    for (const [key, value] of Object.entries(obj)) {
        if (value !== undefined) {
            cleaned[key] = value;
        }
    }
    return cleaned;
};
// GET all entries
router.get("/", async (req, res) => {
    try {
        const entries = await prisma.entry.findMany();
        res.json(entries);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch entries" });
    }
});
// GET single entry
router.get("/:id", async (req, res) => {
    try {
        const entry = await prisma.entry.findUnique({
            where: { id: Number(req.params.id) }
        });
        if (!entry) {
            return res.status(404).json({ error: "Entry not found" });
        }
        res.json(entry);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch entry" });
    }
});
// POST create entry
router.post("/", async (req, res) => {
    try {
        const validated = EntryCreateSchema.parse(req.body);
        const cleanedData = removeUndefined(validated);
        const entry = await prisma.entry.create({ data: cleanedData });
        res.status(201).json(entry);
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ error: error.issues });
        }
        res.status(500).json({ error: "Failed to create entry" });
    }
});
// PUT update entry
router.put("/:id", async (req, res) => {
    try {
        const validated = EntryUpdateSchema.parse({
            ...req.body,
            id: Number(req.params.id)
        });
        const { id, ...updateData } = validated;
        const cleanedData = removeUndefined(updateData);
        const entry = await prisma.entry.update({
            where: { id },
            data: cleanedData
        });
        res.json(entry);
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ error: error.issues });
        }
        res.status(500).json({ error: "Failed to update entry" });
    }
});
// DELETE entry
router.delete("/:id", async (req, res) => {
    try {
        await prisma.entry.delete({
            where: { id: Number(req.params.id) }
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete entry" });
    }
});
export default router;
//# sourceMappingURL=entries.js.map