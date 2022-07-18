import React from "react";
import usePagination from 'react';

export const umysePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
  }) => {
    const paginationRange = useMemo(() => {
       // Our implementation logic will go here 
        
    }, [totalCount, pageSize, siblingCount, currentPage]);
  
    return paginationRange;
  };