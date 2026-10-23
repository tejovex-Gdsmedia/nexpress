"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cities } from "@/lib/constants";

export default function RateCalculator() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [weight, setWeight] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ low: number; high: number; days: string } | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    if (!from || !to || !w || w <= 0) return;

    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const base = 35 + w * 18;
      const isSame = from === to;
      const low = Math.round(isSame ? base * 0.7 : base);
      const high = Math.round(low * 1.4);
      const days = isSame ? "1" : "2-4";
      setResult({ low, high, days });
      setLoading(false);
    }, 900);
  };

  return (
    <div className="rounded-2xl border border-border-blue bg-white p-6">
      <div className="flex items-center gap-2 text-navy">
        <Calculator className="h-5 w-5 text-sky" />
        <h3 className="text-lg font-semibold">Estimate Your Shipping Cost</h3>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Select value={from} onValueChange={setFrom}>
          <SelectTrigger>
            <SelectValue placeholder="From city" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={to} onValueChange={setTo}>
          <SelectTrigger>
            <SelectValue placeholder="To city" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value.replace(/[^0-9.]/g, ""))}
          placeholder="Weight (kg)"
          aria-label="Weight in kilograms"
          inputMode="decimal"
          className="rounded-lg border border-border-blue px-4 py-2.5 text-sm outline-none focus-visible:outline-sky sm:col-span-2"
        />

        <Button variant="primary" size="md" onClick={handleCalculate} className="sm:col-span-2">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Calculate"}
        </Button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-5 rounded-xl bg-off-white p-4 text-center"
        >
          <p className="text-sm text-text-muted">Estimated Cost</p>
          <p className="text-2xl font-bold text-navy">
            ₹{result.low}–₹{result.high}
          </p>
          <p className="mt-1 text-sm text-text-muted">Estimated {result.days} days</p>
        </motion.div>
      )}
    </div>
  );
}
