import { ThemeToggle } from "@/src/theme/ThemeToggle";
import ProfileButton from "@/src/feature/auth/ProfileButton";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Menu } from "lucide-react";

import { getAuthSession } from "@/lib/auth";
import Container from "@/components/ui/container";

const routes = [
  { key: "id1", href: "/", label: "Home" },
  { key: "id2", href: "/page1", label: "Page1" },
  { key: "id3", href: "/page2", label: "Page2" },
];

export const Header = async () => {
  const session = await getAuthSession();
  const userSession = session?.user;

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.key}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">PLACEHOLDER</h1>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
              {routes.map((route) => (
                <Button key={route.key} asChild variant="ghost">
                  <Link
                    href={route.href}
                    className="text-sm font-medium transition-colors"
                  >
                    {route.label}
                  </Link>
                </Button>
              ))}
            </nav>
            <ThemeToggle />
            <ProfileButton userSession={userSession} />
          </div>
        </div>
      </Container>
    </header>
  );
};
