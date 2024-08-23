import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { For } from "solid-js";

const salesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: 1999.00,
    avatar: "/avatars/01.png",
    fallback: "OM"
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: 39.00,
    avatar: "/avatars/02.png",
    fallback: "JL"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: 299.00,
    avatar: "/avatars/03.png",
    fallback: "IN"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: 99.00,
    avatar: "/avatars/04.png",
    fallback: "WK"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 39.00,
    avatar: "/avatars/05.png",
    fallback: "SD"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 39.00,
    avatar: "/avatars/05.png",
    fallback: "SD"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 39.00,
    avatar: "/avatars/05.png",
    fallback: "SD"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 39.00,
    avatar: "/avatars/05.png",
    fallback: "SD"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 39.00,
    avatar: "/avatars/05.png",
    fallback: "SD"
  }
];

export function RecentSales() {
  return (
    <div class="space-y-8 max-h-80 overflow-y-auto">
      <For each={salesData}>{(sale, index) => (
        <div class="flex items-center pr-1.5">
          <Avatar class="size-9">
            <AvatarImage src={sale.avatar} alt={sale.name} />
            <AvatarFallback>{sale.fallback}</AvatarFallback>
          </Avatar>
          <div class="ml-4 space-y-1">
            <p class="text-sm font-medium leading-none">{sale.name}</p>
            <p class="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div class="ml-auto font-medium">+${sale.amount.toFixed(2)}</div>
        </div>
      )}
      </For>
    </div>
  );
}