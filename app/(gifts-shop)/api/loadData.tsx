// app/utils/loadData.ts

type Item = {
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

let cachedData: Item[] = [];

export async function loadData() {
  if (cachedData) return cachedData;

  try {
    const response = await fetch("/gifts.json", {
      cache: "no-store", // чтобы не кешировал на уровне браузера/серверного рендера
    });

    if (!response.ok) throw new Error("Не удалось загрузить JSON");

    cachedData = await response.json();
    return cachedData;
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    throw error;
  }
}
