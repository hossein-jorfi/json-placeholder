import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { PaginationReturnType } from "@/hooks/use-pagination";

interface Props {
  paginationHook: PaginationReturnType;
}

const PostsPagination = ({ paginationHook }: Props) => {
  console.log(paginationHook)
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem onClick={() => paginationHook.onChangePage('', 2)}>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PostsPagination;
