import { For, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { ModeToggle } from "./mode-toggle/ModeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuDescription,
  NavigationMenuIcon,
  NavigationMenuItem,
  NavigationMenuLabel,
  NavigationMenuLink,
  NavigationMenuTrigger
} from "~/components/ui/navigation-menu";
import { TbMenu2 } from 'solid-icons/tb';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "~/components/ui/sheet";
import navigationItems from "~/data/navData";

function NavigationMenuSection({ item }: any) {
  const numRows = Math.ceil(item.links.length / 2);
  const numCols = item.links.length > 4 ? 2 : 1;

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        {item.label}
        <NavigationMenuIcon />
      </NavigationMenuTrigger>

      <NavigationMenuContent
        class={`grid gap-3 md:w-[400px] lg:w-[750px] ${numCols > 1 ? 'lg:grid-cols-4' : 'lg:grid-cols-2'} ${numRows > 1 ? 'lg:grid-rows-2' : 'lg:grid-rows-1'}`}
      >
        <For each={item.links}>
          {(link) => (
            <NavigationMenuLink
              href={link.href}
              class={link.class || "hover:bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"} // Use custom class if provided, otherwise default
            >
              {link.icon && <link.icon class="size-6" />}
              <NavigationMenuLabel class="mb-2 mt-4 text-md font-medium">
                {link.label}
              </NavigationMenuLabel>
              <NavigationMenuDescription class="text-sm leading-tight text-muted-foreground">
                {link.description}
              </NavigationMenuDescription>
            </NavigationMenuLink>
          )}
        </For>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default function Nav() {
  return (
    <div class="flex items-center w-full mt-5">
      <A href="/">
        <img src='/assets/images/logo.png' class="w-32 h-6 ml-5" />
      </A>
      <div class="flex-grow justify-around hidden lg:flex">
        <NavigationMenu orientation='horizontal'>
          <For each={navigationItems}>
            {(item) => <NavigationMenuSection item={item} />}
          </For>
        </NavigationMenu>
      </div>
      <div class="mr-5 hidden lg:block">
        <ModeToggle />
      </div>

      {/* Mobile Menu using Sheet */}
      <Sheet>
        <SheetTrigger asChild class="lg:hidden ml-auto mr-5">
            <TbMenu2 class="h-6 w-6 text-gray-700" />
        </SheetTrigger>
        <SheetContent position="left" class="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>
              <A href="/">
                <img src='/assets/images/logo.png' class="w-32 h-6" />
              </A>
            </SheetTitle>
            <SheetDescription class="mt-4">
              <ModeToggle />
            </SheetDescription>
          </SheetHeader>
          <div class="mt-5">
            <nav class="space-y-4">
              <For each={navigationItems}>
                {(item) => (
                  <div>
                    <button class="w-full text-left font-medium text-lg">
                      {item.label}
                    </button>
                    <div class="ml-4">
                      <For each={item.links}>
                        {(link) => (
                          <A href={link.href} class="block py-2 text-gray-700">
                            {link.label}
                          </A>
                        )}
                      </For>
                    </div>
                  </div>
                )}
              </For>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}