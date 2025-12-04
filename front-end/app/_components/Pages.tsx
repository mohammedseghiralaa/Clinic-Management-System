import {
  CalendarCheck,
  CreditCard,
  FileText,
  Home,
  Pill,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";

interface Page {
  name: string;
  href: string;
  icon: React.ReactNode;
}
const Pages: Page[] = [
  { name: "Home", href: "/", icon: <Home size={20} /> },
  { name: "Patients", href: "/patients", icon: <Users size={20} /> },
  { name: "Doctors", href: "/doctors", icon: <UserPlus size={20} /> },
  {
    name: "Appointments",
    href: "/appointments",
    icon: <CalendarCheck size={20} />,
  },
  { name: "Medical Records", href: "/records", icon: <FileText size={20} /> },
  { name: "Prescriptions", href: "/prescriptions", icon: <Pill size={20} /> },
  { name: "Billing", href: "/billing", icon: <CreditCard size={20} /> },
  { name: "Settings", href: "/settings", icon: <Settings size={20} /> },
];
export default Pages;
