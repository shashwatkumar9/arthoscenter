'use client';

import Link from 'next/link';
import { MenuCategory } from '@/constants/navigation';

interface MegaMenuProps {
  category: MenuCategory;
}

export function MegaMenu({ category }: MegaMenuProps) {
  // Split surgeries into columns (3-4 per column for better layout)
  const surgeryColumns = [];
  const surgeriesPerColumn = Math.ceil(category.surgeries.length / 3);

  for (let i = 0; i < category.surgeries.length; i += surgeriesPerColumn) {
    surgeryColumns.push(category.surgeries.slice(i, i + surgeriesPerColumn));
  }

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-screen max-w-5xl">
      <div className="bg-white rounded-lg shadow-xl border p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {category.title}
          </h3>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {surgeryColumns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-2">
              {column.map((surgery) => (
                <Link
                  key={surgery.id}
                  href={surgery.url}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                >
                  {surgery.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Featured surgery section removed - featured property not defined in MenuCategory interface */}
      </div>
    </div>
  );
}
