// src/shared/api/client.ts
export const apiClient = {
  get: async (url: string, options?: any) => {
    const res = await fetch(url, options);
    return res.json();
  },
  post: async (url: string, data: any, options?: any) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...options?.headers },
      body: JSON.stringify(data),
      ...options,
    });
    return res.json();
  }
};
