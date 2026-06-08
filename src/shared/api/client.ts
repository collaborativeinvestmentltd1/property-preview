// src/shared/api/client.ts
export const apiClient = {
  get: async <T = any>(url: string, options?: any): Promise<T> => {
    const res = await fetch(url, options);
    return res.json();
  },
  post: async <T = any>(url: string, data: any, options?: any): Promise<T> => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...options?.headers },
      body: JSON.stringify(data),
      ...options,
    });
    return res.json();
  }
};
