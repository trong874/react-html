import React from "react";
import Pagination from 'rsuite/Pagination';

type propPagination = {
    total:number,
    limit:number,
    callback: (page:number) => void;
};
function PaginationCustom ({total,limit,callback}:propPagination) {
    const [activePage, setActivePage] = React.useState(1);

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