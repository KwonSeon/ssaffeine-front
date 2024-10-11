"use client";

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Key } from "react";

export default function AdminTabs() {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabChange = (key: Key) => {
    const path = String(key); // Key를 string으로 변환
    router.push(path); // 경로 변경
  };
  return (
    <Card isBlurred shadow="md" className="w-fit h-fit">
      <CardBody>
        <Tabs
          aria-label="Options"
          isVertical
          selectedKey={pathname}
          onSelectionChange={handleTabChange}
          color="primary"
          className="overflow-hidden"
          classNames={{
            cursor: "bg-[#674736] hover:bg-[#7D5C3B] active:bg-[#d0d0d0] ",
            tabContent: "text-black hover:text-[#674736] active:text-[#7D5C3B]",
            tabList: "bg-white",
            tab: "p-4",
            panel: "p-0",
          }}
        >
          <Tab key="/admin" title="주문현황">
            <Link href="/admin"></Link>
          </Tab>
          <Tab key="/admin/order" title="order">
            <Link href="/admin/order"></Link>
          </Tab>
          <Tab key="/admin/print" title="print">
            <Link href="/admin/print"></Link>
          </Tab>
          <Tab key="/admin/write" title="write">
            <Link href="/admin/write"></Link>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
