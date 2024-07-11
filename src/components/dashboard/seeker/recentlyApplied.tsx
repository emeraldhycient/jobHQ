import { Button } from '@/components/ui/button';
import { FC } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface Job {
    id: number;
    title: string;
    location: string;
    dateApplied: string;
    status: string;
}

interface RecentlyAppliedProps {
    jobs: Job[];
}

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

function RecentlyApplied({jobs}:any) {
    return (
        <Table className="border-collapse border-none">
            <TableCaption className="text-gray-500">A list of your recent invoices.</TableCaption>
            <TableHeader className="border-none">
                <TableRow className="border-none">
                    <TableHead className="text-xs font-normal border-none">Job</TableHead>
                    <TableHead className="text-xs font-normal border-none">Date Applied</TableHead>
                    <TableHead className="text-xs font-normal border-none">Status</TableHead>
                    <TableHead className="text-xs font-normal border-none">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="border-none">
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice} className="border-none">
                        <TableCell className="font-medium border-none">{invoice.invoice}</TableCell>
                        <TableCell className="border-none">{invoice.paymentStatus}</TableCell>
                        <TableCell className="border-none">{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right border-none">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter className="border-none">
                <TableRow className="border-none">
                    <TableCell className="border-none" colSpan={3}>Total</TableCell>
                    <TableCell className="text-right border-none">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default RecentlyApplied
