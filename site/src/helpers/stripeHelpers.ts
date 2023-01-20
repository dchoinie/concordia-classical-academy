export const formatPrice = (price: number) => `$${price / 100}`;

export const getBuyButtonUrl = (name: any, urls: any[]): string | undefined => {
    const found = urls.find((b: any) => name === b.name);
    return found?.url;
};