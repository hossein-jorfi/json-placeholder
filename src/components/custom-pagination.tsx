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
        <PaginationItem onClick={onPrevious}>
          <PaginationPrevious />
        </PaginationItem>
        {paginationRange?.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === "DOTS") {
            return (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          // Render our Page Pills
          return (
            <PaginationItem onClick={() => onPageChange(+pageNumber)}>
              <PaginationLink>{pageNumber}</PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem onClick={onNext}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
