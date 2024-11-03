import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const COLUMN_COUNT = 5;
const ROW_COUNT = 5;

export function DataTableSkeleton() {
    return (
        <div>
            <div className="flex items-center py-4">
                <Skeleton className="h-10 w-1/4 bg-gray-300 dark:bg-gray-700" />
            </div>
            <div className="rounded-md border border-gray-300 dark:border-gray-600">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {Array.from({ length: COLUMN_COUNT }).map((_, idx) => (
                                <TableHead key={idx}>
                                    <Skeleton className="h-8 w-full bg-gray-300 dark:bg-gray-700" />
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: ROW_COUNT }).map((_, rowIdx) => (
                            <TableRow key={rowIdx}>
                                {Array.from({ length: COLUMN_COUNT }).map((_, cellIdx) => (
                                    <TableCell key={cellIdx}>
                                        <Skeleton className="h-6 w-full bg-gray-300 dark:bg-gray-700" />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
