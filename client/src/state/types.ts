export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface MonthlyData {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface DailyData {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalExpenses: number;
  totalRevenue: number;
  totalProfit: number;

  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<MonthlyData>;
  dailyData: Array<DailyData>;
  createdAt: Date;
  updatedAt: Date;
}
