export async function fetchSchema(): Promise<object> {
  const response = await fetch("/data/schema.json");
  if (!response.ok) {
    throw new Error(
      `Failed to fetch schema.json: ${response.status} ${response.statusText}`
    );
  }
  return (await response.json()) as object;
}
