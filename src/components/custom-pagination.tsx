import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { usePagination } from "@/hooks/use-pagination";
import { cn } from "@/lib/utils";

interface Props {
  onPageChange: (n: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const CustomPagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange?.length || 0) < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange?.[paginationRange.length - 1];

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          onClick={currentPage === 1 ? () => {} : onPrevious}
          className={cn(currentPage === 1 && "opacity-40")}
        >
          <PaginationPrevious />
        </PaginationItem>
        {paginationRange?.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === "DOTS") {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          // Render our Page Pills
          return (
            <PaginationItem
              key={pageNumber}
              onClick={() => onPageChange(+pageNumber)}
            >
              <PaginationLink isActive={currentPage == pageNumber}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem
          onClick={currentPage === lastPage ? () => {} : onNext}
          className={cn(currentPage === lastPage && "opacity-40")}
        >
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
