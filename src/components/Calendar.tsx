"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface CalendarModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Calendar({ open, onOpenChange }: CalendarModalProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] p-6 h-[calc(100vh-56px)] lg:h-[calc(100vh-113px)] top-[56px] lg:top-[113px]"
      >
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold text-[var(--black)]">
            Calendar
          </SheetTitle>
        </SheetHeader>
        <p className="text-sm text-[var(--medium-gray)]">
          A simple calendar feature will be displayed here later.
        </p>
      </SheetContent>
    </Sheet>
  );
}
