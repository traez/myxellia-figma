"use client";
import { FaCalculator } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import { HiChartBar } from "react-icons/hi";
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

export default function Budgeting({
  open,
  onOpenChange,
}: BudgetingModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[320px] p-0 gap-0 rounded-2xl overflow-hidden">
        {/* Header with calculator icon */}
        <DialogHeader className="bg-slate-800 px-6 py-8 text-center">
          <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4">
            <FaCalculator className="w-8 h-8 text-slate-800" />
          </div>
          <DialogTitle className="sr-only">Budget Management</DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 py-8 space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Set up annual budgets by account category
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <IoTrendingUp className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Track actuals vs budget in real time
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <HiChartBar className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Edit amounts, apply percentage changes, or roll forward last
                year's data—all in one place.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full text-base font-medium"
            onClick={() => onOpenChange(false)}
          >
            Create Budget
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
