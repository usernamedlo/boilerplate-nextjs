"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LoginModal } from "@/src/feature/auth/LoginModal"
import { signOut } from "next-auth/react";

const ProfileButton = ({ userSession }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={userSession?.image} />
          <AvatarFallback>
            <img src="/img/products/placeholder.jpg"></img>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {userSession ? (
          <>
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                signOut();
              }}
              className="cursor-pointer"
            >
              Log out
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>Sign In</DropdownMenuItem>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="cursor-pointer"
                >
                  Login
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <LoginModal />
              </DialogContent>
            </Dialog>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
