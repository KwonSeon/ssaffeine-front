"use client";
import { Button, NavbarItem, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Menu({ isMobile }: { isMobile?: boolean }) {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => {
    setState(!state);
  };

  const pathname = usePathname();
  console.log(pathname);

  return isMobile ? (
    <>
      <NavbarMenuItem className="justify-end flex">
        <Button variant="light" size="lg">
          <Link href="/order">주문하기</Link>
        </Button>
      </NavbarMenuItem>
      <NavbarMenuItem className="justify-end flex">
        <Button variant="light" size="lg">
          <Link href="/notice">공지사항</Link>
        </Button>
      </NavbarMenuItem>
      <NavbarMenuItem className="justify-end flex">
        <Button variant="light" size="lg">
          <Link href="/mypage">마이페이지</Link>
        </Button>
      </NavbarMenuItem>
      <NavbarMenuItem className="justify-end flex">
        <Button variant="light" size="lg">
          <Link href="/admin">관리자페이지</Link>
        </Button>
      </NavbarMenuItem>
      <NavbarMenuItem className="justify-end flex">
        <Button variant="light" size="lg">
          <Link href="/admin">로그인</Link>
        </Button>
      </NavbarMenuItem>
    </>
  ) : (
    <>
      <NavbarItem>
        <Button variant="light">
          <Link href="/order">주문하기</Link>
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button variant="light">
          <Link href="/notice">공지사항</Link>
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button variant="light">
          <Link href="/mypage">마이페이지</Link>
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button variant="light">
          <Link href="/admin">관리자페이지</Link>
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button color="primary" variant="shadow" onClick={handleClick}>
          {state ? "로그아웃" : "로그인"}
        </Button>
      </NavbarItem>
    </>
  );
}
