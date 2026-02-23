"use client";
import React from "react";
import { usePathname } from "next/navigation";
export default function Breadcrumb({ course }: { course: { name: string } | undefined; }) {
 const pathname = usePathname();
 return (
   <span>
     Course {course?.name} &gt; {pathname.endsWith("table") ? "people" : pathname.split("/").pop()}
   </span>
);}
