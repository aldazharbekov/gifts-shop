// app/utils/loadData.ts

type GiftItem = {
  name: string;
  description: string;
  category: string;
  superpowers: {
    live: string;
    create: string;
    love: string;
    dream: string;
  };
};

let cachedData: GiftItem[] | null = null;

export async function loadData(): Promise<GiftItem[]> {
  if (Array.isArray(cachedData)) return cachedData;

  try {
    const response = await fetch("/gifts.json", {
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Не удалось загрузить JSON");

    const data: GiftItem[] = await response.json();
    cachedData = data;
    return data;
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    throw error;
  }
}
