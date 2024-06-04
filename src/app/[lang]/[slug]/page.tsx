import Link from "next/link";
import React from "react";

const product = {
  name: "XXX",
  title: "What's xxx?",
  subTitle:
    "An open-source, cloud native, horizontally scalable, distributed time-series database.",
  github: "https://github.com/lindb/lindb",
  features: [
    {
      title: "High performance",
      items: [
        "A single server could easily support more than one million write TPS.",
        "With fundamental techniques like efficient compression storage and parallel computing, LinDB delivers highly optimized query performance.",
      ],
    },
    {
      title: "High availability",
      items: [
        "The multi-channel replication protocol supports any amount of nodes, ensures the system availability.",
      ],
    },
    {
      title: "Easy to use",
      items: [
        "Schema-free multi-dimensional data model with Metric, Tags, and Fields.",
        "The LinQL is flexible yet handy for real-time data analytics.",
      ],
    },
    {
      title: "Horizontal scalability",
      items: [
        "Horizontal scalable is made simple by adding more new broker and storage nodes without too much thinking and manual operations Schema-free multi-dimensional data model with Metric, Tags, and Fields.",
        "Tags-based sharding strategy resolves the hotspot problem",
      ],
    },
    {
      title: "Cross Multiple IDCs",
      items: [
        "LinDB is designed to work under a Multi-Active IDCs cloud architecture. The compute layer of LinDB, called brokers, supports efficient Multi-IDCs aggregation query.",
      ],
    },
    {
      title: "Auto Rollup",
      items: [
        "LinDB supports rollup in specific intervals(minute, hour and day) automatically after creating the database(unlike the Continuous-Query of InfluxDB).",
      ],
    },
  ],
};

export default async function Products({
  params,
}: {
  params: { slug: string };
}) {
  const features = product.features;
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="relative sm:pt-12 lg:pt-18">
        <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-2xl tracking-tight text-transparent sm:text-3xl lg:text-5xl">
          {product.title}
        </p>
        <p className="mt-3 tracking-tight text-slate-400 sm:text-lg lg:text-2xl">
          {product.subTitle}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            className="rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
            href={product.github}
          >
            Get started
          </a>
          <Link
            className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
            href={product.github}
            target="_blank"
          >
            View on GitHub
          </Link>
        </div>
      </div>
      <div className="relative pb-24 pt-6">
        <div className="py-6 text-center sm:mt-6 lg:mt-10">
          <span className="bg-gradient-to-tl from-blue-600 to-purple-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl lg:text-3xl">
            Why {product.name}?
          </span>
        </div>
        <div className="mx-auto grid max-w-[85rem] gap-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-8 ">
          {features.map((feature, index) => (
            <div className="relative flex sm:pe-6" key={index}>
              <div className="sm:ms-6 lg:ms-8">
                <h2 className="mb-1 font-semibold dark:text-white">
                  {feature.title}
                </h2>
                <div className="text-gray-600 dark:text-slate-400 ">
                  <ul className="before:*:mr-2 before:*:text-sky-600 before:*:content-['>']">
                    {feature.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ slug: "lindb", lang: "en" }, { slug: "linsight" }];
}
