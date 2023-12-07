<<<<<<< HEAD
"use client";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
=======
"use client"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
>>>>>>> 85072285ba13cd87a79d6c08ffe55bb3339c999f
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
<<<<<<< HEAD
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signIn } from "next-auth/react";
=======
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
>>>>>>> 85072285ba13cd87a79d6c08ffe55bb3339c999f

export function LoginModal() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
<<<<<<< HEAD
          <Button
            onClick={async () => {
              await signIn('github');
            }}
            variant="outline"
          >
=======
          <Button variant="outline">
>>>>>>> 85072285ba13cd87a79d6c08ffe55bb3339c999f
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button disabled variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
<<<<<<< HEAD
          <Input disabled id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input disabled id="password" type="password" />
=======
          <Input disabled  id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input disabled  id="password" type="password" />
>>>>>>> 85072285ba13cd87a79d6c08ffe55bb3339c999f
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create account</Button>
      </CardFooter>
    </Card>
<<<<<<< HEAD
  );
}
=======
  )
}
>>>>>>> 85072285ba13cd87a79d6c08ffe55bb3339c999f
