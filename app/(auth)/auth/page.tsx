import Loading from "@/components/loading";
import React, { Suspense } from "react";
import AuthBody from "./authbody";

export default function Auth() {
  return (
    <Suspense fallback={<Loading />}>
      <AuthBody />
    </Suspense>
  );
}
