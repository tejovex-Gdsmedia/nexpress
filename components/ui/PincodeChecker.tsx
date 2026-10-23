"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, MapPinCheck } from "lucide-react";
import Button from "@/components/ui/Button";

const checks = [
  "Express Parcel available",
  "Next Day Delivery",
  "COD available",
  "Warehousing nearby",
];

export default function PincodeChecker() {
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const handleCheck = () => {
    if (pincode.trim().length < 4) return;
    setResult(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 900);
  };

  return (
    <div className="rounded-2xl border border-border-blue bg-white p-6">
      <div className="flex items-center gap-2 text-navy">
        <MapPinCheck className="h-5 w-5 text-sky" />
        <h3 className="text-lg font-semibold">Check Pincode Serviceability</h3>
      </div>
      <p className="mt-1 font-serif text-sm text-text-muted">
        Enter your pincode to see what Nexpres can deliver to your area.
      </p>

      <div className="mt-4 flex gap-2">
        <input
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
          onKeyDown={(e) => e.key === "Enter" && handleCheck()}
          placeholder="e.g. 411001"
          aria-label="Pincode"
          inputMode="numeric"
          className="w-full rounded-lg border border-border-blue px-4 py-2.5 text-sm outline-none focus-visible:outline-sky"
        />
        <Button variant="primary" size="md" onClick={handleCheck}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Check"}
        </Button>
      </div>

      {result && (
        <div className="mt-5 flex flex-col gap-2.5">
          {checks.map((check, i) => (
            <motion.div
              key={check}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center gap-2 text-sm text-text-body"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-sky" />
              {check}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
