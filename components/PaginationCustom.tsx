import React from "react";
import Pagination from 'rsuite/Pagination';

type propPagination = {
    total:number,
    current_page:number,
    limit:number,
    callback: (page:number) => void;
};
function PaginationCustom ({total,current_page,limit,callback}:propPagination) {
    const [activePage, setActivePage] = React.useState(current_page || 1);

    const handleChangePage = (page:number) => {
        setActivePage(page);
        callback(page)
    }
    return <>
        <Pagination total={total}
                    size={'sm'}
                    ellipsis={true}
                    limit={limit}
                    activePage={activePage}
                    prev={true}
                    next={true}
                    boundaryLinks={true}
                    maxButtons={4}
                    onChangePage={handleChangePage}
                    className={'custom-pagination'}
        />
    </>
}

export default PaginationCustom