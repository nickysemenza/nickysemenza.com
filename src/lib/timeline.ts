import type { Project } from './projects';

export interface YearRange {
  startYear: number;
  endYear: number;
  years: number[];
}

export interface ProjectStrip {
  project: Project;
  startYear: number;
  startMonth: number; // 0-11
  endYear: number;
  endMonth: number; // 0-11
  isOngoing: boolean;
}

// Calculate year range for compact poster view
export function calculateYearRange(projects: Project[]): YearRange {
  const now = new Date();

  let minYear = now.getFullYear();
  let maxYear = now.getFullYear();

  for (const p of projects) {
    const startYear = p.startDate.getFullYear();
    const endYear = (p.endDate || now).getFullYear();

    if (startYear < minYear) minYear = startYear;
    if (endYear > maxYear) maxYear = endYear;
  }

  const years: number[] = [];
  for (let y = minYear; y <= maxYear; y++) {
    years.push(y);
  }

  return { startYear: minYear, endYear: maxYear, years };
}

// Convert projects to strips for poster view
export function calculateProjectStrips(projects: Project[]): ProjectStrip[] {
  const now = new Date();

  return projects.map((project) => {
    const endDate = project.endDate || now;
    return {
      project,
      startYear: project.startDate.getFullYear(),
      startMonth: project.startDate.getMonth(),
      endYear: endDate.getFullYear(),
      endMonth: endDate.getMonth(),
      isOngoing: !project.endDate,
    };
  });
}

// Calculate horizontal position as percentage within year range
export function getStripPosition(
  strip: ProjectStrip,
  yearRange: YearRange
): { leftPercent: number; widthPercent: number } {
  const totalMonths = (yearRange.endYear - yearRange.startYear + 1) * 12;

  // Start position (months from timeline start)
  const startMonthsFromStart =
    (strip.startYear - yearRange.startYear) * 12 + strip.startMonth;

  // End position
  const endMonthsFromStart =
    (strip.endYear - yearRange.startYear) * 12 + strip.endMonth + 1;

  const leftPercent = (startMonthsFromStart / totalMonths) * 100;
  const widthPercent =
    ((endMonthsFromStart - startMonthsFromStart) / totalMonths) * 100;

  return { leftPercent, widthPercent };
}
