"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, Map, MapPin, Package, Route, Truck, ImageOff } from "lucide-react";
import type { GalleryItem } from "@/lib/constants";
import { fadeUp, fadeUpContainer, viewportOnce } from "@/lib/animations";

const conceptIcons = { Route, BarChart3, Map, Package, Truck, MapPin };

function PhotoTile({ item }: { item: Extract<GalleryItem, { kind: "photo" }> }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-dark-navy"
    >
      {!failed ? (
        <Image
          src={item.src}
          alt={item.caption}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          style={{ objectFit: "cover", objectPosition: item.focal }}
          className="transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-hero-gradient">
          <ImageOff className="h-7 w-7 text-white/40" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/10 to-transparent" />
      <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white">
        {item.caption}
      </p>
    </motion.div>
  );
}

function ConceptTile({ item }: { item: Extract<GalleryItem, { kind: "concept" }> }) {
  const Icon = conceptIcons[item.icon];
  return (
    <motion.div
      variants={fadeUp}
      className="relative flex aspect-[4/5] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-dark-navy p-6 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
        <Icon className="h-6 w-6 text-light-blue" />
      </div>
      <p className="relative text-sm font-medium text-white/85">{item.caption}</p>
    </motion.div>
  );
}

export default function ServiceGallery({ items }: { items: GalleryItem[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUpContainer}
      className="grid grid-cols-2 gap-4 sm:grid-cols-3"
    >
      {items.map((item, i) =>
        item.kind === "photo" ? (
          <PhotoTile key={i} item={item} />
        ) : (
          <ConceptTile key={i} item={item} />
        )
      )}
    </motion.div>
  );
}
