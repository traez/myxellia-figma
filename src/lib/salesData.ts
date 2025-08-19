export const salesData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Total Inflow", // Total Inflow (Total Inflow = Commission Revenue + MRR)
      data: [7, 6, 6.6, 8.4, 9, 10, 9.6, 8.8, 9.2, 10.4, 9.6, 11.4],
      backgroundColor: "rgba(54, 162, 235, 0.7)", // blue
    },
    {
      label: "MRR", // MRR (Monthly Recurring Revenue)
      data: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5],
      backgroundColor: "rgba(75, 192, 192, 0.7)", // green
    },
    {
      label: "Commission Revenue", // Commission Revenue
      data: [4, 3, 3.6, 4.4, 5, 6, 5.6, 4.8, 5.2, 5.4, 4.6, 6.4],
      backgroundColor: "rgba(255, 99, 132, 0.7)", // red
    },
    {
      label: "GMV", // GMV (Gross Merchandise Value)
      data: [20, 15, 18, 22, 25, 30, 28, 24, 26, 27, 23, 32],
      backgroundColor: "rgba(201, 203, 207, 0.7)", // gray
    },
  ],
};

/* 
Flow of money
GMV (₦100M) = everything bought/sold on your platform. GMV (Gross Merchandise Value)

Out of this:
₦80M → goes straight to merchants/partners (their sales).
₦20M → stays with you as Commission Revenue. Commission Revenue (20% of GMV).

MRR (₦10M) = separate subscription/retainer payments (not part of GMV). MRR (Monthly Recurring Revenue)
This comes directly to you, on top of your commission.

Your company’s books
Commission Revenue = ₦20M
MRR = ₦10M
Total Inflow = ₦30M

So:
₦100M GMV passed through the platform
Your take-home (inflow) = ₦30M
*/