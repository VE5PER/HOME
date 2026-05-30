import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Microscope } from 'lucide-react';
import experienceData from '../data/experience.json';

interface ExperienceItem {
  role: string;
  organization: string;
  dates: string;
  type?: string;
  responsibilities: string[];
}

const parseDate = (dateStr?: string): Date => {
  if (!dateStr) return new Date();
  if (dateStr.toLowerCase() === 'present') return new Date();
  const parts = dateStr.split(' ');
  if (parts.length === 1) return new Date(`${parts[0]}-01-01`); // Year only
  return new Date(dateStr);
};

const getStartEndDate = (dates: string): { start: Date; end: Date } => {
  const [startStr, endStr] = dates.split(/\s+[–-]\s+/);
  return {
    start: parseDate(startStr),
    end: parseDate(endStr),
  };
};

const Timeline: React.FC = () => {
  const sortedAndGroupedData = useMemo(() => {
    // 1. Parse and Sort
    const itemsWithDates = experienceData.map(item => ({
      ...item,
      ...getStartEndDate(item.dates)
    })).sort((a, b) => b.start.getTime() - a.start.getTime());

    // 2. Group overlapping items
    const rows: ExperienceItem[][] = [];
    let currentRow: ExperienceItem[] = [];

    itemsWithDates.forEach((item, index) => {
      if (currentRow.length === 0) {
        currentRow.push(item);
      } else {
        const prevItem = currentRow[currentRow.length - 1];
        const prevDates = getStartEndDate(prevItem.dates);
        const currDates = getStartEndDate(item.dates);

        // Check for overlap
        const overlap = (currDates.start < prevDates.end && currDates.end > prevDates.start);

        if (overlap && currentRow.length < 2) { // Limit to 2 for side-by-side
          currentRow.push(item);
        } else {
          rows.push(currentRow);
          currentRow = [item];
        }
      }
    });
    if (currentRow.length > 0) rows.push(currentRow);

    return rows;
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 relative">
      {/* Central Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-slate-700 hidden md:block"></div>

      <div className="space-y-12">
        {sortedAndGroupedData.map((row, rowIndex) => (
          <div key={rowIndex} className={`relative flex flex-col md:flex-row gap-8 ${row.length > 1 ? 'md:items-stretch' : 'md:justify-center'}`}>

            {/* Timeline Dot for the Row */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900 z-10 shadow-md hidden md:block"></div>

            {row.map((item, index) => (
              <motion.div
                key={`${rowIndex}-${index}`}
                className={`group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl border border-zinc-100 dark:border-slate-700 transition-all duration-300 flex-1 ${row.length === 1 ? 'md:max-w-3xl md:w-full' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: rowIndex * 0.1 + index * 0.1 }}
              >
                <div className="flex flex-col gap-6 h-full">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-zinc-100 dark:border-slate-700 pb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-text-light-primary dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {item.role}
                        </h3>
                        {item.type && (
                          <span className="px-3 py-1 text-xs font-semibold tracking-wide text-indigo-600 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30 rounded-full border border-indigo-100 dark:border-indigo-800">
                            {item.type}
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-medium text-text-light-secondary dark:text-slate-400 flex items-center gap-2">
                        {item.role.toLowerCase().includes('researcher') ? <Microscope size={18} /> : <Briefcase size={18} />}
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-xl self-start">
                      <Calendar size={16} />
                      <span>{item.dates}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-4 flex-grow">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-light-secondary dark:text-slate-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
