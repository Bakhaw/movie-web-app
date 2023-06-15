export async function fetchData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
}
