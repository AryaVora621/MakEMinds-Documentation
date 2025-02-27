import React from "react";
import Layout from "@theme-original/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function CustomLayout(props) {
  return (
    <>
      <Layout {...props} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
