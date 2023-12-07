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
import { LoginModal } from "@/components/ui/LoginModal";

const ProfileButton = ({ currentUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/img/products/placeholder-avatar.svg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {currentUser ? (
          <>
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuItem>PLACEHOLDER</DropdownMenuItem>
            <DropdownMenuItem>PLACEHOLDER</DropdownMenuItem>
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
