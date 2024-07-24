import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="flex my-10 lg:mt-24 items-center gap-14 p-2">
      <div className="hidden lg:flex relative flex-1 h-[55vh]">
        <Image fill src="/contact.gif" alt="" />
      </div>
      <div className="flex-1">
        <Card>
          <CardHeader className="text-3xl font-semibold text-center">Contact Us</CardHeader>
          <CardContent>
            <ContactForm/>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
