"use client";

import { useState, useEffect } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface LayoutItem extends Layout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

function GridPage() {
  const [layouts, setLayouts] = useState<{ lg: LayoutItem[]; xs: LayoutItem[] }>({
    lg: [],
    xs: []
  });
  const [mounted, setMounted] = useState(false);

  // Initialize layouts
  useEffect(() => {

    const savedLayouts = localStorage.getItem("gridLayouts");
    
    if (savedLayouts) {
      setLayouts(JSON.parse(savedLayouts));
    } else {
      // Default layouts
      const defaultLgLayout: LayoutItem[] = [
        { i: "0", x: 0, y: 0, w: 2, h: 2 },
        { i: "1", x: 2, y: 0, w: 2, h: 2 },
        { i: "2", x: 4, y: 0, w: 2, h: 2 },
        { i: "3", x: 6, y: 0, w: 2, h: 2 },
        { i: "4", x: 8, y: 0, w: 2, h: 2 },
        { i: "5", x: 10, y: 0, w: 2, h: 2 },
      ];

      const defaultXsLayout: LayoutItem[] = [
        { i: "0", x: 0, y: 0, w: 1, h: 2 },
        { i: "1", x: 0, y: 2, w: 1, h: 2 },
        { i: "2", x: 0, y: 4, w: 1, h: 2 },
        { i: "3", x: 0, y: 6, w: 1, h: 2 },
        { i: "4", x: 0, y: 8, w: 1, h: 2 },
        { i: "5", x: 0, y: 10, w: 1, h: 2 },
      ];

      setLayouts({ lg: defaultLgLayout, xs: defaultXsLayout });
    }
    
    setMounted(true);
  }, []);

  // Sync layouts - maintain order consistency
  const syncLayouts = (sourceLayout: LayoutItem[], breakpoint: string) => {
    // Sort by position (y first for vertical, then x for horizontal)
    const sortedSource = [...sourceLayout].sort((a, b) => {
      if (a.y === b.y) return a.x - b.x;
      return a.y - b.y;
    });

    // Get the order of items
    const itemOrder = sortedSource.map(item => item.i);

    let newLayouts: { lg: LayoutItem[]; xs: LayoutItem[] };

    if (breakpoint === "lg") {
      // Desktop changed, update mobile to match order
      const newXsLayout: LayoutItem[] = itemOrder.map((id, index) => ({
        i: id,
        x: 0,
        y: index * 2,
        w: 1,
        h: 2,
      }));

      newLayouts = {
        lg: sourceLayout,
        xs: newXsLayout,
      };
    } else {
      // Mobile changed, update desktop to match order
      const newLgLayout: LayoutItem[] = itemOrder.map((id, index) => ({
        i: id,
        x: index * 2,
        y: 0,
        w: 2,
        h: 2,
      }));

      newLayouts = {
        lg: newLgLayout,
        xs: sourceLayout,
      };
    }

    setLayouts(newLayouts);
    localStorage.setItem("gridLayouts", JSON.stringify(newLayouts));
  };

  const onLayoutChange = (currentLayout: Layout[], allLayouts: { [key: string]: Layout[] }) => {
    // Determine which breakpoint changed
    const breakpoint = Object.keys(allLayouts).find(
      bp => allLayouts[bp] === currentLayout
    ) || "lg";

    syncLayouts(currentLayout as LayoutItem[], breakpoint);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Responsive Grid Layout
          </h1>
          <p className="text-gray-600">
            Drag items to rearrange. Layout syncs between desktop and mobile views.
          </p>
        </div>

        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 1, xxs: 1 }}
          rowHeight={60}
          onLayoutChange={onLayoutChange}
          isDraggable={true}
          isResizable={true}
          compactType="vertical"
        >
          {["0", "1", "2", "3", "4", "5"].map((key) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-md border-2 border-gray-200 hover:border-blue-400 transition-colors flex items-center justify-center cursor-move"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-700 mb-2">
                  {key}
                </div>
                <div className="text-sm text-gray-500">Drag me</div>
              </div>
            </div>
          ))}
        </ResponsiveGridLayout>

        <div className="mt-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Current Layout Order
          </h2>
          <div className="space-y-2">
            <div>
              <span className="font-medium text-gray-700">Desktop: </span>
              <span className="text-gray-600">
                {layouts.lg
                  .sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y))
                  .map((item) => item.i)
                  .join(", ")}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Mobile: </span>
              <span className="text-gray-600">
                {layouts.xs
                  .sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y))
                  .map((item) => item.i)
                  .join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridPage;