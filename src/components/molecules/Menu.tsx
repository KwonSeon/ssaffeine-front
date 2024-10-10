"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <menu className="flex">
      <li>
        <Button color="primary" variant="light">
          <Link href="/order">주문하기</Link>
        </Button>
      </li>
      <li>
        <Button color="primary" variant="light">
          <Link href="/notice">공지사항</Link>
        </Button>
      </li>
      <li>
        <Button color="primary" variant="light">
          <Link href="/">메뉴3</Link>
        </Button>
      </li>
      <li>
        <Button color="primary" variant="light">
          <Link href="/">메뉴4</Link>
        </Button>
      </li>
      <li>
        <Button color="primary" variant="shadow" onClick={handleClick}>
          {state ? "로그아웃" : "로그인"}
        </Button>
      </li>
    </menu>
  );
}
