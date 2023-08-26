export default function createSlug(name) {
  const slug = name
    ?.toLowerCase()
    ?.replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and dashes
    ?.replace(/\s+/g, "-") // Replace spaces with dashes
    ?.replace(/^-+|-+$/g, ""); // Trim leading and trailing dashes

  return slug;
}
