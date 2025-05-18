export function formatRupiah(value: number): string{
  return value.toLocaleString("id-ID", {
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}