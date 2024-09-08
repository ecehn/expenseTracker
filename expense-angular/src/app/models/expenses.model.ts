export interface Expense {
  item: string;       
  notes: string;     
  date: Date;        
  amount: number;     
  paidBy: string[];   
}