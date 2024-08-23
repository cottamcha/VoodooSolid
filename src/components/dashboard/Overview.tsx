import { BarChart } from "~/components/ui/charts"

export function Overview() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000
        ],
        backgroundColor: "rgba( 229,31,89, 0.5)", // Custom background color
        borderWidth: 1
      }
    ]
  }
 

  return (
    <div class="h-[350px] w-full">
      <BarChart data={chartData} />
    </div>
  )
}