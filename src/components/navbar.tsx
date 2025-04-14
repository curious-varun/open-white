"use client";

import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";
import { AvatarImage, Avatar, AvatarFallback } from "./ui/avatar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn, signOut } from "next-auth/react";

interface UserAvatarMenuProps {
  imageUrl: string;
  username: string;
}

export function TopBar() {
  const { data: session } = useSession();

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="h-16 flex items-center justify-between px-6 py-2 bg-white/70 backdrop-blur-md shadow-sm rounded-b-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center font-bold text-xl">
          <div className="logomask w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-800 via-cyan-500 to-blue-300">
            <Image
              src="/logo.png"
              alt="logo-mask"
              width={45}
              height={45}
              className="invisible"
            />
          </div>
          <span className="text-gray-800">blog</span>
        </Link>

        {/* Navigation Links */}
        <div className=" sticky top-0 z-50 hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <NavLink href="/explore">Explore</NavLink>
          <NavLink href="/for-you">For You</NavLink>
          <NavLink href="/write">Write a Blog</NavLink>
        </div>

        {/* Auth Actions */}
        <div className="flex items-center space-x-2">
          {session ? (
            <UserAvatarMenu
              imageUrl={session.user?.image || ""}
              username={session.user?.email || "U"}
            />
          ) : (
            <Button
              className="text-xs rounded-full flex items-center gap-1 shadow-sm border-gray-300"
              size="sm"
              variant="outline"
              onClick={async (e) => {
                e.preventDefault();
                await signIn("google");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="currentColor"
              >
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              Get Started
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative group transition-colors duration-200 hover:text-blue-500"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
    </Link>
  );
}

export function UserAvatarMenu({ imageUrl, username }: UserAvatarMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer ring-3 ring-gray-300 ring-blue-400 transition">
          <AvatarImage src={imageUrl} alt="User" />
          <AvatarFallback className="bg-gray-100 text-gray-600">
            {username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48 shadow-lg rounded-md">
        <Link href={`/profile/${username}`} passHref>
          <DropdownMenuItem asChild>
            <div className="flex items-center space-x-2 cursor-pointer">
              <User className="w-4 h-4" />
              <span>My Profile</span>
            </div>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={() => signOut()}
          className="cursor-pointer text-red-500 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
