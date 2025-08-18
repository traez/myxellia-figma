"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BudgetingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Budgeting({ open, onOpenChange }: BudgetingModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[300px] h-[383px] sm:w-[430px] sm:h-[549px] mx-auto p-0 gap-0 rounded-2xl overflow-hidden grid grid-rows-[38%_62%]">
        {/* Header with calculator icon */}
        <DialogHeader className="relative">
          <Image
            src="/modal-calculator.png"
            alt="/modal-calculator"
            fill
            sizes="(min-width: 360px) 100vw"
            className="object-contain"
          />
          <DialogTitle className="sr-only">Budget Management</DialogTitle>
        </DialogHeader>

        {/* Content. In future made code DRY */}
        <article className="px-2 py-1 space-y-0.5 sm:px-6 sm:py-3 sm:space-y-1 flex flex-col justify-around">
          {/* Feature 1 */}
          <aside className="flex items-start gap-1 sm:gap-2">
            <div className="flex-shrink-0 w-3 h-3 sm:w-8 sm:h-8 flex items-center justify-center relative">
              <Image
                src="/icon-settings.svg"
                alt="Settings icon"
                fill
                sizes="(min-width: 360px) 100vw"
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xs sm:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1 leading-tight">
                Set up annual budgets by account category
              </h3>
              <p className="text-[10px] sm:text-sm text-gray-600 leading-relaxed">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </div>
          </aside>

          {/* Feature 2 */}
          <aside className="flex items-start gap-1 sm:gap-2">
            <div className="flex-shrink-0 w-3 h-3 sm:w-8 sm:h-8 flex items-center justify-center relative">
              <Image
                src="/icon-trend-up.svg"
                alt="Trend up icon"
                fill
                sizes="(min-width: 360px) 100vw"
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xs sm:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1 leading-tight">
                Track actuals vs budget in real time
              </h3>
              <p className="text-[10px] sm:text-sm text-gray-600 leading-relaxed">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </aside>

          {/* Feature 3 */}
          <aside className="flex items-start gap-1 sm:gap-2">
            <div className="flex-shrink-0 w-3 h-3 sm:w-8 sm:h-8 flex items-center justify-center relative">
              <Image
                src="/icon-bar-chart.svg"
                alt="Bar chart icon"
                fill
                sizes="(min-width: 360px) 100vw"
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xs sm:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1 leading-tight">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-[10px] sm:text-sm text-gray-600 leading-relaxed">
                Edit amounts, apply percentage changes, or roll forward last
                year's data—all in one place.
              </p>
            </div>
          </aside>

          {/* CTA Button */}
          <Button
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-1.25 sm:py-3 rounded-full text-xs sm:text-base font-medium"
            onClick={() => onOpenChange(false)}
          >
            Create Budget
          </Button>
        </article>
      </DialogContent>
    </Dialog>
  );
}
